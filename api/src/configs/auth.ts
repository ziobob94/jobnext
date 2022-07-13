import jwt         from "jsonwebtoken";
import conf        from "../configs/vary";
import * as models from "../models/auth_models";
import {config}    from "dotenv";
import mongoose    from "mongoose";

const User: mongoose.Model<any> = models.ModelUser;
const sign: any = jwt.sign;

const configs: any = conf.jsonwebtoken_opt;
console.log(sign)

const findUser = async (cred: any): Promise<any> => {
    let user_found: any = null;
    {
        user_found = await User.findOne({email: cred.email, password: cred.password});
    }
}

const decodeUser = async (token: any): Promise<any> => {
    if(token !== "" ) {
        const d: any = await jwt.verify(token, process.env.JWT_SECRET, configs.options);
        return d.user;
    }
    else return null;
}

const validateToken = async (token: any = null ): Promise<any> => {
    console.log("VALIDATE",token);
    const decoded: any = await decodeUser(token);
    if (decoded) return true
    else return false
}

const genToken = async (user: any): Promise<any> => {
    //console.log("GENERATE",user);
    let user_found: any = null;
    user_found = await User.findOne({email: user.email, password: user.password});
    //console.log("USER FOUND LOGIN", user_found);
    if (user_found) {
        const token: any = null;
        const us: any = JSON.stringify(user);
        const payload: any = {
            user: JSON.parse(us)
        };
        //console.log("payload", btoa(payload));
       // console.log("JWT_SECRET", process.env.JWT_SECRET);
        try {
            const t: any = jwt.sign(payload,process.env.JWT_SECRET,configs.options);
            return t;
        }
        catch (e) {
            console.log(e);
            return "";
        }

    }
    else return "";

}

const refreshToken = async (token: any): Promise<any> => {
    //console.log("GENERATE",user);
    const v: any = await validateToken(token);
    if (v){
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET, configs.options);
        const u: any = decoded.user;
        const user_found: any = await User.findOne({email: u.email});
        console.log("USER FOUND LOGIN", user_found);
        console.log("USER DECODED", u);
        if (user_found) {
            const us: any = JSON.stringify(user_found);
            const payload: any = {
                user: JSON.parse(us)
            };
            //console.log("payload", btoa(payload));
            // console.log("JWT_SECRET", process.env.JWT_SECRET);
            try {
                const t: any = jwt.sign(payload, process.env.JWT_SECRET, configs.options);
                return t;
            } catch (e) {
                console.log(e);
                return "";
            }

        } else return "";
    }

}
const auth: any = {
    generateToken: (user: any): any => genToken(user),
    verifyToken : (token: any): any => validateToken(token),
    refreshToken: (token: any): any => refreshToken(token),
};

export default auth;
