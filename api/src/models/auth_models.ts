import mongoose from "mongoose";

const user_schema: mongoose.Schema  = new mongoose.Schema(
    {
        email: { type: String, required: true, index: true ,unique: true},
        username: { type: String, required: false, unique: true},
        pwd: {type: String, required: true},
        signup_date: {type: String},
        token: {type: String}
    }
);



export const ModelUser: mongoose.Model<any> = mongoose.model("User", user_schema,"users_test");
