import dotenv from 'dotenv'
dotenv.config();
import express from 'express'

const app = express();

app.get("/", (req, res) => {
    res.json({message: "Server is running successfully"});
    console.log("Server is Running");
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server Started at port ", port);

});
