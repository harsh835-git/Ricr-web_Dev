import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import connectdb from './src/config/db.js';
import AuthRouter from "./src/routers/myRouter.js"

const app = express();
app.use(express.json());

app.use("/auth",AuthRouter);

app.get("/", (req, res) => {
    res.json({message: "Server is running successfully"});
    console.log("Server is Running");
})


const port = process.env.PORT || 5000;
app.listen(port, async () => {
    console.log("Server Started at port ", port);
    connectdb();
});
