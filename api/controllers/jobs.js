const express = require('express');
const router = express.Router();

router.get("/", async (req,res) => {
    const client = req.app.get("db_client")
    console.log(client)
    const jobs =  await client.collection("jobs").find().limit(20).toArray();
    console.log(jobs)
       /* .findOne()
        .then( (res) => {
            console.log(res);
        })
        .catch( (e) => {
            console.log("ERR",e);
        })*/
    res.send()
})


module.exports = router;