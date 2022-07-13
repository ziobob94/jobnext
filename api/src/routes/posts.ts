import express from "express";
const router: express.Router = express.Router();

router.get("/", async (req: any,res: any): Promise<any> => {
    const client: any = await req.app.get("db_client").db("nextjob_test");
})

export default router;
