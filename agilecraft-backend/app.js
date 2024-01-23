const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const User = require('./Models/User');
const cors = require("cors");
require('dotenv').config();
const cookieParser = require('cookie-parser')

const app = express();
const saltRounds = 5;
app.use(cors());
app.use(cookieParser())


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI);



app.post("/register", async (req, res) => {

    const {
        fName,
        lName,
        email,
        password,
        phoneNumber
    } = req.body

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const newUser = await User.create({
            fName,
            lName,
            email,
            password: hashedPassword,
            phoneNumber,
        });

        const token = jwt.sign({
            id: newUser._id,
            email: newUser.email,
        }, process.env.SECRET_KEY, {
            expiresIn: '2h'
        })

        newUser.token = token;
        newUser.password = undefined;

        res.status(201).json(newUser);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Email or User exists",
        });
    }
});
app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({
            email
        });

        if (user) {
            bcrypt.compare(password, user.password, async (err, result) => {
                if (result) {
                    try {
                        // Generate JWT token
                        const token = jwt.sign({
                                id: user._id,
                            },
                            process.env.SECRET_KEY, {
                                expiresIn: "2h",
                            }
                        );

                        user.token = token;
                        user.password = undefined;

                        const options = {
                            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                            httpOnly: true,
                        };

                        res
                            .status(200)
                            .cookie("token", token, options)
                            .json({
                                success: true,
                                token,
                                user,
                            });
                    } catch (jwtError) {
                        console.error(jwtError);
                        res.status(500).json({
                            message: "Error generating token"
                        });
                    }
                } else {
                    res.status(401).json({
                        message: "Invalid credentials",
                    });
                }
            });
        } else {
            res.status(404).json({
                message: "User not found",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});