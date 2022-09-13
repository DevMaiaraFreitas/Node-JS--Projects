import personalRepository from "../repositories/personal.repository.js"


async function createPersonal(personal){
    return await personalRepository.insertPersonal(personal);
}

async function getPersonals(){
    return await personalRepository.getPersonals();
}

async function getPersonal(id){
    return await personalRepository.getPersonal(id);
}

async function deletePersonal(id){
    await personalRepository.deletePersonal(id);
}

async function updatePersonal(personal){
    return await personalRepository.updatePersonal(personal);
}


export default{
    createPersonal,
    getPersonals,
    getPersonal,
    deletePersonal,
    updatePersonal
}