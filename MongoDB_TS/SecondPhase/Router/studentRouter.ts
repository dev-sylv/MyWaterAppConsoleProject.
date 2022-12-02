import { Router } from "express";
import { getStudents, postStudents, updateStudent, oneStudent, deleteStudent } from "../Controller/studentController";

const router = Router();

router.route("/getallStudents").get(getStudents);
router.route("/addnewstudents").post(postStudents);
router.route("/getonestudent/:id").get(oneStudent);
router.route("/updatestudent/:id").patch(updateStudent);
router.route("/deletestudent/:id").delete(deleteStudent);

export default router;