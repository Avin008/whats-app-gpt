import express from 'express';
import { Request, Response } from 'express-serve-static-core';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 8080;


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: "hello world"});
})


app.listen(PORT, () => {
    console.log("server is running on PORT", PORT);
})