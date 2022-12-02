import mongoose from "mongoose";

const URI = "mongodb://localhost/studentPortal";

mongoose.connect(URI);

mongoose.connection.on(
    "open", () =>{
        console.log("Database connected to server")
    }
).once(
    "error", (error) =>{
        console.log("An error occured: ", error)
    }
)

export default module;