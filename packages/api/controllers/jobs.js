const express = require('express');
const router = express.Router();

router.get("/", async (req,res) => {
    const client = req.app.get("db_client")
    const jobs =  await client.collection("jobs").find().limit(20).toArray();
    res.send(jobs)
})


module.exports = router;