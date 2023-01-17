import express, { Application, Request, Response } from "express";

const PORT: number = 2023;

const server: Application = express();

server.use(express.json());

interface students {
    id: number;
    name: string;
    section: string;
    state: string;
  }
  
  const studentsData: students[] = [
    {
      id: 1,
      name: "Okon David",
      section: "2019/2020",
      state: "Lagos",
    },
    {
      id: 2,
      name: "Issac Kowope",
      section: "1969/1970",
      state: "Yola",
    },
    {
      id: 3,
      name: "Judit Okoro",
      section: "2002/2003",
      state: "Mian",
    },
    {
      id: 4,
      name: "Godwin Korogbade",
      section: "2010/2011",
      state: "Warri",
    },
    {
      id: 5,
      name: "Esther Fimber",
      section: "2019/2020",
      state: "Lagos",
    },
  ];

  server.get("/", (req: Request, res: Response): Response =>{
      return res.status(200).json({
        message: "server is up and serving me 🎈🎈📌",
      })
     
  });
  console.log("To check");

  // GET DATA:
  server.get("/getStudentData", (req: Request, res: Response): Response => {
    try {
      return res.status(200).json({
        message: "Data Gotten Sucessfully from the DB",
        data: studentsData,
      });
    } catch (error) {
      return res.status(404).json({
        message: "An Error Occoured",
        data: error,
      });
    }
  });

  // SINGLE GET DATA:
  server.get("/getStudentData/:studentID", (req: Request, res: Response) =>{
    try {
      const studentIDs = parseInt(req.params.studentID);
      const aStudent = studentsData.find((student) => student.id === studentIDs);

      if (aStudent) {
        return res.status(200).json({
          message: `USER WITH ID: ${studentIDs} FOUND`,
          data: aStudent,
        })
      } else {
        return res.status(400).json({
          messsage: "USER NOT FOUND",
        });
      }
    } catch (error) {
      return res.status(400).json({
        message: "Couldn't get User",
        data: error.message,
      });
    }
  });

  // POST DATA:
  server.post("/addNewStudents", (req: Request, res: Response) =>{
    try {
      const NewStudents = {
        id: studentsData.length + 1,
        name: req.body.name,
        section: req.body.section,
        state: req.body.state,
      };
      studentsData.push(NewStudents);
      return res.status(201).json({
        message: `NewStudents successfully created.`,
        data: NewStudents,
      })
    } catch (error) {
      return res.status(400).json({
        message: "An error occured",
        data: error.message,
      });
    }
  });

  // UPDATE DATA:
  server.patch("/update/:userID", (req: Request, res: Response) =>{
    try {
      const userIDs = parseInt(req.params.studentID);
      const stud: any = studentsData.find((student) => student.id === userIDs);
      stud.id = stud.id;
      stud.name = req.body.name;
      stud.section = req.body.section;
      stud.name = req.body.state;
      return res.status(200).json({
        message: `Student with ID: ${userIDs} successfully updated`,
        data: stud,
      });
    } catch (error) {
      res.status(404).json({
        message: "An error occured",
        data: error.message,
      })
    }
  });

  // DELETE DATA:
server.delete("/deleteStudent/:ID", (req: Request, res: Response) =>{
  try {
    const IDs = parseInt(req.params.ID);
    const student: any = studentsData.find((stud) => stud.id === IDs);

    const position = studentsData.indexOf(student);
    studentsData.splice(position, 1);

    return res.status(200).json({
      message: `Student at position ${position} successfully deleted from DB`,
      data: studentsData,
    });
  } catch (error) {
      return res.status(400).json({
        message: `An error occured: ${error}`
      });
  }
})



  server.listen(PORT, () => {
    console.log(`Listening On PORT: ${PORT}`);
  });
  