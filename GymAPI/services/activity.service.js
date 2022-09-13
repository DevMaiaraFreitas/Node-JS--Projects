import activityRepository from "../repositories/activity.repository.js"


async function createActivity(activity){
    return await activityRepository.insertActivity(activity);
}

async function getActivitys(){
    return await activityRepository.getActivitys();
}

async function getActivity(id){
    return await activityRepository.getActivity(id);
}

async function deleteActivity(id){
    await activityRepository.deleteActivity(id);
}

async function updateActivity(activity){
    return await activityRepository.updateActivity(activity);
}


export default{
    createActivity,
    getActivitys,
    getActivity,
    deleteActivity,
    updateActivity
}