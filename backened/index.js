console.log("a")

const express = require("express")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("home page")
})

app.post("/signup", (req, res) => {
    const { email, password} = req.body
})

app.listen(8004, ()=> {
    console.log("listining on port 8004")
})