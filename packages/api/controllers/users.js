const express = require('express');
const router = express.Router();

router.get("/", async (req,res) => {
    const client = req.app.get("db_client")
    const users =  await client.collection("users_test").find().limit(20).toArray();
    res.send(users)
})

//

//TODO: CRUD logic on users

//CREATE: post method to create an user
router.post("/", async (req,res) => {
    const client = req.app.get("db_client")
    const users =  await client.collection("users_test").find().limit(20).toArray();
})

//READ  get method to retrieve user's data
router.get("/", async (req,res) => {
    const client = req.app.get("db_client")
    const users =  await client.collection("users_test").find().limit(20).toArray();
})

//UPDATE post method to update field on an user's account
router.post("/", async (req,res) => {
    const client = req.app.get("db_client")
    const users =  await client.collection("users_test").find().limit(20).toArray();
})

//DELETE post method to delete a user
router.post("/", async (req,res) => {
    const client = req.app.get("db_client")
    const users =  await client.collection("users_test").find().limit(20).toArray();
})

//WORKS ON SESSION

//LOGIN post method to login an user write on db
router.post("/", async (req,res) => {
    const client = req.app.get("db_client")
    const users =  await client.collection("sessions_test").find().limit(20).toArray();
})

//LOGOUT post method to logout an user write/delete on/from db
router.post("/", async (req,res) => {
    const client = req.app.get("db_client")
    const users =  await client.collection("sessions_test").find().limit(20).toArray();
})

//UPDATE post method to update user's properties write/delete on/from db
router.post("/", async (req,res) => {
    const client = req.app.get("db_client")
    const users =  await client.collection("sessions_test").find().limit(20).toArray();
})
module.exports = router;