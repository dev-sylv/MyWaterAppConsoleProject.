import express, { Application, Response, Request } from "express";
require("./Config/db")

const PORT: number = 2030;
import router from "./Router/studentRouter";

const app: Application = express();

app.use(express.json());
app.use("/api", router)

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Server created, up and active",
    })
});

app.listen(PORT, () =>{
    console.log("Listening to port in Postman")
})