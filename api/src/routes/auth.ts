import express                 from "express";
import * as models             from "../models/auth_models";
import auth                    from "../configs/auth";
import configs                 from "../server_config.json";
import moment                  from "moment";
import mongoose                from "mongoose";
import {MongoManagerInterface} from "src/lib/interfaces";
import {Configs}               from "src/lib/types";
const cfg: Configs = configs;
const router: express.Router = express.Router();

//TODO: CRUD logic on users
// CREATE/SIGNUP: post method to create an user
const signupRoute =  (): any => {
    router.post("/register",async ( req: any, res: any) => {
        let user_inserted: any = null;
        try {
            const user: any = req.body.user;
            const mongoClass: MongoManagerInterface = req.app.get("mongodb");
            const user_to_insert: any = new models.ModelUser(user);
            user_inserted = await mongoClass.createDocument(user_to_insert,user);
            if (typeof user_inserted.code !== "number") {
                (configs.node.mode === "dev") ? res.status(200).send(user_inserted) : res.status(200).send(true);
            }
            else (configs.node.mode === "dev") ? res.status(409).send(user_inserted) : res.send(409).send(false);
        }
        catch (e) {
            (configs.node.mode === "dev") ? res.send(400).send(e) : res.send(400).send(false);
        }
    })};

//TODO:
// READ/LOGIN  get method to retrieve user's data


const loginRoute = (): any  => {
    router.post("/login", async (req: any , res: any) => {
            try {
                const user: any = req.body.user;
                //let verified = await auth.verifyToken(token);
                if (req.cookies && req.cookies.token && req.cookies.token !== "") {
                    const token: string = "";
                    const v: any = auth.verifyToken(req.cookies.token);
                    if (v) {
                        try{
                            const new_token: any = auth.refreshToken(req.cookies.token);
                            if (token !== ""){
                                res.cookie("token", new_token);
                                res.setHeader("Authorization", token);
                                res.end();
                            }

                            else {
                                res.clearCookie("token");
                                res.status(403).end();
                            }
                        }
                        catch (e) {
                            res.clearCookie("token");
                            res.status(403).end();
                        }
                    }
                    else {
                        const new_token: any = auth.generateToken(user);
                        if (token !== ""){
                            res.cookie("token", new_token);
                            res.setHeader("Authorization", token);
                            res.end();
                        }
                        else {
                            res.clearCookie("token");
                            res.status(402).end();
                        }
                    }
                }
                else {
                    try {
                        const token: any = await auth.generateToken(user);
                        if (token !== ""){
                            res.cookie("token", token);
                            res.setHeader("Authorization", token);
                            res.end();
                        }
                        else {
                            res.clearCookie("token");
                            res.status(403).end();
                        }
                    }
                    catch (e) {
                        console.log(e);
                        res.status(403).end()
                    }
                }
            }
            catch (e) {
                console.log(e)
            }
        }
    )};

signupRoute();
loginRoute();

//TODO:
// UPDATE/MODIFY post method to update field on an user's account

export default router;
