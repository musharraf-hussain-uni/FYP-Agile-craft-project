const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const User = require('./Models/User');
const cors = require("cors");
require('dotenv').config();
const session = require('express-session');

const app = express();
const saltRounds = 5;
app.use(cors());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    } // Adjust based on your environment (e.g., HTTPS)
}));


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI);

app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({
            email: email
        });

        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    const token = jwt.sign({
                        id: user._id,
                        name: user.email
                    }, process.env.SECRET_KEY);

                    const {
                        password,
                        ...otherDetails
                    } = user._doc;

                    // Set user information in session
                    req.session.user = {
                        id: user._id,
                        name: user.email,
                        // Add other relevant details if needed
                    };

                    res
                        .cookie("access_token", token, {
                            httpOnly: true,
                        })
                        .status(200)
                        .json({
                            ...otherDetails,
                            message: "Login successful"
                        });
                } else {
                    res.status(401).json({
                        message: "Invalid credentials"
                    });
                }
            });
        } else {
            res.status(404).json({
                message: "User not found"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

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

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Email or User exists",
        });
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});