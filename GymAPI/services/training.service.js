import trainingRepository from "../repositories/training.repository.js";
import studentRepository from "../repositories/student.repository.js";
import activityRepository from "../repositories/activity.repository.js";
import personalRepository from "../repositories/personal.repository.js";


async function createTraining(training){
    if(!await studentRepository.getStudent(training.student_id)){
        throw new Error("The Student not exist")
    }if(!await activityRepository.getActivity(training.activity_id)){
        throw new Error("The Activity not exist")
    }if(!await personalRepository.getPersonal(training.personal_id)){
        throw new Error("The Personal not exist");
    }
    return await trainingRepository.insertTraining(training);
}

async function getTrainings(){
    return await trainingRepository.getTrainings();
}

async function getTraining(id){
    return await trainingRepository.getTraining(id);
}

async function deleteTraining(id){
    await trainingRepository.deleteTraining(id);
}

async function updateTraining(training){
    if(!await studentRepository.getStudent(training.student_id)){
        throw new Error("The Student not exist")
    }if(!await activityRepository.getActivity(training.activity_id)){
        throw new Error("The Activity not exist")
    }if(!await personalRepository.getPersonal(training.personal_id)){
        throw new Error("The Personal not exist");
    }
    return await trainingRepository.updateTraining(training);
}


export default{
    createTraining,
    getTrainings,
    getTraining,
    deleteTraining,
    updateTraining
}