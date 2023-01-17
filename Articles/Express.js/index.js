const express = require("express");

const PORT = 2022;

const server = express();

server.use(express.json());

let CodeLabData = [
    {
        id: 1,
        name: "Sylvia",
        stack: "Full Stack Software Engineer",
        Grade: "A1"
    },
    {
        id: 2,
        name: "Sanni",
        stack: "MERN Software Engineer",
        Grade: "A1"
    },
    {
        id: 3,
        name: "Esther",
        stack: "UI/UX Software Engineer",
        Grade: "A1"
    },
    {
        id: 4,
        name: "Isaac",
        stack: "SENIOR REACT Engineer",
        Grade: "A1"
    },
    {
        id: 5,
        name: "Godwin",
        stack: "SENIOR Software Engineer",
        Grade: "A1"
    },
]

server.get("/", (req, res) =>{
    res.status(200).send(CodeLabData);
});

// GET METHOD:
server.get("/getData", (req, res) =>{
    try {
        res.status(200).json({
            message: "Data gotten successfully",
            data: CodeLabData,
        })
    } catch (error) {
        res.status(404).json({
            message: `An error occured: \t ${error}`,
        })
    }
});
// GET METHOD ENDS HERE

// POST METHOD:
server.post("/createData", (req, res) =>{
    try {
        const createCodeLabData = {
            id: CodeLabData.length + 1,
            name: req.body.name,
            stack: req.body.stack,
            grade: req.body.grade,
        }
        CodeLabData.push(createCodeLabData);
        res.status(201).json({
            message: "Added to the CodeLab Data successfully.",
            data: CodeLabData,
        })
    } catch (error) {
        res.status(404).json({
            message: `An error occured: ${error}`,
        })
    }
});
// POST METHOD ENDS HERE

// SINGLE GET METHOD:
server.get("/getSingleData:id", (req, res) =>{
    try {
        const getID = parseInt(req.params.id);
        const student = CodeLabData.find((student) => student.id === getID);

        if (getID) {
            res.status(200).json({
                message: `User ${getID} is found.`,
                data: student,
            });
        } else {
            res.status(404).json({
                message: `User ${getID} Not found`,
            });
        }
    } catch (error) {
        res.status(404).json({
            message: `An error occured: ${error}`,
        });
    }
});
// SINGLE GET METHOD ENDS HERE

// PATCH(UPDATE) METHOD:
server.patch("/updateStudent/:id", (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const student = studentData.find((stud) => stud.id === id);
  
      student.id = student.id;
      student.name = req.body.name;
      student.stack = req.body.stack;
      student.grade = req.body.grade;
  
      res.status(200).json({
        message: "Updated Sucessfully",
        data: student,
      });
    } catch (error) {
      res.status(404).json({
        message: `Page Not Found: \t ${error}`,
      });
    }
  });
// PATCH(UPDATE) METHOD ENDS HERE
  
//   DELETE METHOD:
  server.delete("/deleteStudent/:id", (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const student = studentData.find((stud) => stud.id === id);
  
      const index = studentData.indexOf(student);
      studentData.splice(index, 1);
  
      res.status(200).json({
        message: "Student Has Been Deleted sucessfully",
      });
    } catch (error) {
      res.status(404).json({
        message: `Couldn't Perform Operation: \t ${error}`,
      });
    }
  });
// DELETE METHOD ENDS HERE

server.listen(PORT, () =>{
    console.log("Server is Listening");
})

