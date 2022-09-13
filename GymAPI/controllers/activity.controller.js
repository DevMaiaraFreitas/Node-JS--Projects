import activityService from "../services/activity.service.js";


async function createActivity(req, res, next){
    try{
        let activity = req.body;
        if (!activity.name || !activity.description){
            throw new Error("Name and description are mandatory");
        }
        activity = await activityService.createActivity(activity);
        res.send(activity);
        logger.info(` POST/activity - ${JSON.stringify(activity)}`);
    }catch(err){
        next(err);
    }
}

async function getActivitys(req, res, next){
    try{
        res.send(await activityService.getActivitys());
        logger.info("GET/activity");
    }catch(err){
        next(err);
    }
}

async function getActivity(req, res, next){
    try{
        res.send(await activityService.getActivity(req.params.id));
        logger.info("GET/activity/id");
    }catch(err){
        next(err);
    }
}

async function deleteActivity(req, res, next){
    try{
        await activityService.deleteActivity(req.params.id);
        res.end();
        logger.info("DELETE/activity/id");
    }catch(err){
        next(err);
    }
}

async function updateActivity(req, res, next){
    try{
        let activity = req.body;
        if (!activity.activity_id || !activity.name || !activity.description){
            throw new Error("ID, name and description are mandatory");
        }
        activity = await activityService.updateActivity(activity);
        res.send(activity);
        logger.info(` PUT/activity - ${JSON.stringify(activity)}`);
    }catch(err){
        next(err);
    }
}

export default {
    createActivity,
    getActivitys,
    getActivity,
    deleteActivity,
    updateActivity
}