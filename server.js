import apiRouter from './routes';
import { config } from "dotenv";
import cors from "cors";
import express from "express";

config();

const port = process.env.PORT || 9000;
const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);
app.use('/api', apiRouter);

app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Hello World",
    });
});

app.all("*", (req, res) => {
    res.status(404).send("Sorry, the route you are going to does not exist");
});

app.listen(port, () => {
    console.info(`Server running on port ${port}`);
});

export default app;