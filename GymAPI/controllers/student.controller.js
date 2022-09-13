
import studentService from "../services/student.service.js";


async function createStudent(req, res, next){
    try{
        let student = req.body;
        if (!student.name || !student.cpf ||!student.phone){
            throw new Error("Name, CPF and Phone are mandatory");
        }
        student = await studentService.createStudent(student);
        res.send(student);
        logger.info(` POST/student - ${JSON.stringify(student)}`);
    }catch(err){
        next(err);
    }
}

async function getStudents(req, res, next){
    try{
        res.send(await studentService.getStudents());
        logger.info("GET/student");
    }catch(err){
        next(err);
    }
}

async function getStudent(req, res, next){
    try{
        res.send(await studentService.getStudent(req.params.id));
        logger.info("GET/student/id");
    }catch(err){
        next(err);
    }
}

async function deleteStudent(req, res, next){
    try{
        await studentService.deleteStudent(req.params.id);
        res.end();
        logger.info("DELETE/student/id");
    }catch(err){
        next(err);
    }
}

async function updateStudent(req, res, next){
    try{
        let student = req.body;
        if (!student.student_id || !student.name || !student.cpf ||!student.phone){
            throw new Error("ID, name, CPF and Phone are mandatory");
        }
        student = await studentService.updateStudent(student);
        res.send(student);
        logger.info(` PUT/student - ${JSON.stringify(student)}`);
    }catch(err){
        next(err);
    }
}

export default {
    createStudent,
    getStudents,
    getStudent,
    deleteStudent,
    updateStudent
}