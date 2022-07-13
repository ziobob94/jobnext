import * as dotenv from "dotenv";
dotenv.config();
import serverConfig          from "./server_config.json";
import createError          from "http-errors";
import express              from "express";
import cookieParser         from "cookie-parser";
import logger               from "morgan";
import jobsAPIRouter        from "./routes/jobs";
import userAPIRouter        from "./routes/auth";
import postsApiRouter       from  "./routes/posts";
import path                 from "path";
import * as fs              from "fs";
import {MongoManagerClass}  from "./lib/MongoMangerClass";

const cfg: any = JSON.parse(JSON.stringify(serverConfig));




async function main () {
    const mongoClass = new MongoManagerClass(cfg);
    const mongo: any = await mongoClass.connect();


    if(mongo !== null){
        try {
            const app: express.Express = express();
            app.use(logger("dev"));
            app.use(express.json());
            app.use(express.urlencoded({ extended: false }));
            app.use(cookieParser());
            //app.use(express.static(path.join(__dirname, 'client/build')));

            //ROUTES
            app.set("mongodb", mongoClass);

            app.use("/jobs", jobsAPIRouter);
            app.use("/auth", userAPIRouter);
            app.use("/posts", postsApiRouter);

//        app.use("/",(req,res) => res.send("ciao"))
            // catch 404 and forward to error handler
            app.use((req: any , res: any , next: any): any => {
                next(createError(404));
            });

            // error handler
            app.use((err: any, req: any, res: any, next: any): any => {
                // set locals, only providing error in development
                res.locals.message = err.message;
                res.locals.error = req.app.get("env") === "development" ? err : {};

                // render the error page
                res.status(err.status || 500);
                //res.render('error');
                res.send();
            });
            app.listen(8181, () => {
                console.log("listening on : http://localhost:8181");
            });
        }
        catch (err) {
            console.log(err.message);
        }
    }
}

main().catch((e:any) => console.error(e));