import studentRepository from "../repositories/student.repository.js"


async function createStudent(student){
    return await studentRepository.insertStudent(student);
}

async function getStudents(){
    return await studentRepository.getStudents();
}

async function getStudent(id){
    return await studentRepository.getStudent(id);
}

async function deleteStudent(id){
    await studentRepository.deleteStudent(id);
}

async function updateStudent(student){
    return await studentRepository.updateStudent(student);
}


export default{
    createStudent,
    getStudents,
    getStudent,
    deleteStudent,
    updateStudent
}