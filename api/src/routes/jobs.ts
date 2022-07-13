import express from "express";
const router: express.Router = express.Router();

router.get("/", async (req: any ,res: any ) => {
    const client: any = req.app.get("db_client").db("nextjob_test")
    const jobs: any =  await client.collection("jobs").find().limit(20).toArray();
    res.send(jobs)
})

export default router;
