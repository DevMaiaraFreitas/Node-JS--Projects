import trainingService from "../services/training.service.js";


async function createTraining(req, res, next){
    try{
        let training = req.body;
        if (!training.date ||!training.student_id ||!training.activity_id ||!training.personal_id){
            throw new Error("Date, ID student, ID activity and ID personal are mandatory");
        }
        training = await trainingService.createTraining(training);
        res.send(training);
        logger.info(` POST/training - ${JSON.stringify(training)}`);
    }catch(err){
        next(err);
    }
}

async function getTrainings(req, res, next){
    try{
        res.send(await trainingService.getTrainings());
        logger.info("GET/training");
    }catch(err){
        next(err);
    }
}

async function getTraining(req, res, next){
    try{
        res.send(await trainingService.getTraining(req.params.id));
        logger.info("GET/training/id");
    }catch(err){
        next(err);
    }
}

async function deleteTraining(req, res, next){
    try{
        await trainingService.deleteTraining(req.params.id);
        res.end();
        logger.info("DELETE/training/id");
    }catch(err){
        next(err);
    }
}

async function updateTraining(req, res, next){
    try{
        let training = req.body;
        if (!training.training_id || !training.date ||!training.student_id ||!training.activity_id ||!training.personal_id){
            throw new Error("ID, Name, date, ID student, ID activity and ID personal are mandatory");
        }
        training = await trainingService.updateTraining(training);
        res.send(training);
        logger.info(` PUT/training - ${JSON.stringify(training)}`);
    }catch(err){
        next(err);
    }
}

export default {
    createTraining,
    getTrainings,
    getTraining,
    deleteTraining,
    updateTraining
}