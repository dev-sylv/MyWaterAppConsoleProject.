const express = require("express");

const PORT = 2022;

const myServer = express();

myServer.use(express.json());

let CarsData = [
    {
        id: 1,
      "color": "purple",
      "type": "minivan",
      "registration": new Date(),
      "capacity": 7
    },
    {
        id: 2,
      "color": "red",
      "type": "station wagon",
      "registration": new Date(),
      "capacity": 5
    },
    {
        id: 3,
      "color": "green",
      "type": "toyota",
      "registration": new Date(),
      "capacity": 6
    },
    {
        id: 4,
      "color": "blue",
      "type": "mercedes",
      "registration": new Date(),
      "capacity": 8
    },
    {
        id: 5,
      "color": "orange",
      "type": "highlander",
      "registration": new Date(),
      "capacity": 9
    },
]

myServer.get("/", (req, res) =>{
    res.status(200).send(CarsData);
});

// Get:
myServer.get("/viewCars", (req, res) =>{
    try {
        res.status(200).json({
            messsage: "Car Data gotten successfully.",
            data: CarsData,        
        })
    } catch (error) {
        res.status(404).json({
            messsage: `An error occured:/t ${error}`,
        })
    }
});

// Single get:
myServer.get("/viewOne", (req, res) =>{
    try {
        const getCarID = parseInt(req.params.id);
        const Car = CarsData.find((Car) => Car.id === getCarID);

        if (getCarID) {
            res.status(200).json({
                message: `Car with ID of ${getCarID} Found`,
                data: Car,
            })
        } else {
            res.status(404).json({
                message: `Car with ID of ${getCarID}Not Found`,
        });
    }} catch (error) {
        res.status(404).json({
            message: `An error occured: ${error}`,
        });
    }
});

myServer.listen(PORT, () =>{
    console.log("");
    console.log("My server is running");
})