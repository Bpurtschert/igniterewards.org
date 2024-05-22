const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"users": ["test", "userTwo", "userThree"]})
})

app.listen(4000, ()=> {console.log("Server has started on port 4000")})