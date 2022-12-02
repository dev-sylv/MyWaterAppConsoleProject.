import mongoose from "mongoose";

interface students{
    name: string;
    admissionNo: string|number;
    session: string;
    classes: string;
}

interface myStudents extends students, mongoose.Document{};

const studentSchema =new mongoose.Schema({
    name: String,
    admissionNo: String||Number,
    session: String,
    classes: String,
}, {timestamps: true});

export default mongoose.model<myStudents>("studentportals", studentSchema);