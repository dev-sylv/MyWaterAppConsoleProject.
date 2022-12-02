import studentModel from "../Model/studentModel";
import {Response, Request} from "express";

// Get:
const getStudents = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const getData = await studentModel.find();
        return res.status(200).json({
            message: "Students Data successfully gotten",
            data: getData
        })
    } catch (error) {
        return res.status(200).json({
            message: "An error occured",
            data: error
        })
    }
}

// Post: 
const postStudents = async(req: Request, res: Response):  Promise<Response> =>{
    try {
        const {name, classes} = req.body
        let increase: number = await studentModel.find().count() + 1;
        const createStudents = await studentModel.create({
            name,
            admissionNo:  "codelab00" + increase,
            session: "2022/2023",
            classes,
        });
        return res.status(200).json({
            message: "New Students Successfully added",
            data: createStudents
        })
    } catch (error) {
        return res.status(200).json({
            message: "An error occured",
            data: error
        })
    }
};

// Single get:
const oneStudent = async(req: Request, res: Response): Promise<Response> =>{
    try {
        console.log(req)
        const student1 = await studentModel.findById(req.params.id);
        return res.status(200).json({
            message: "One student data successfully gotten",
            data: student1
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error,
        })
    }
};



// // Update:
const updateStudent = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const { classes } = req.body
        const updates = await studentModel.findByIdAndUpdate(req.params.id, { classes }, {new: true});
        return res.status(200).json({
            message: "Student data successfully updated",
            data: updates
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
};

// // Delete:
const deleteStudent = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const deletes = await studentModel.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Student data deleted from school Database",
            data: deletes
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured here",
            data: error,
        })
    }
};

export {getStudents, postStudents, updateStudent, deleteStudent, oneStudent}  