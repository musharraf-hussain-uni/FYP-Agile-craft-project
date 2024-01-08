const mongoose = require("mongoose")

const {
    Schema
} = mongoose;

mongoose.set('strictQuery', false);

const userSchema = new Schema({
        fName: {
            type: String,
        },
        lName: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
            unique: true,
        },
        phoneNumber: {
            type: String,
        }
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);