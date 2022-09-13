import personalService from "../services/personal.service.js";


async function createPersonal(req, res, next){
    try{
        let personal = req.body;
        if (!personal.name || !personal.cref ||!personal.phone ||!personal.salary){
            throw new Error("Name, CREF, Phone and salary are mandatory");
        }
        personal = await personalService.createPersonal(personal);
        res.send(personal);
        logger.info(` POST/personal - ${JSON.stringify(personal)}`);
    }catch(err){
        next(err);
    }
}

async function getPersonals(req, res, next){
    try{
        res.send(await personalService.getPersonals());
        logger.info("GET/personal");
    }catch(err){
        next(err);
    }
}

async function getPersonal(req, res, next){
    try{
        res.send(await personalService.getPersonal(req.params.id));
        logger.info("GET/personal/id");
    }catch(err){
        next(err);
    }
}

async function deletePersonal(req, res, next){
    try{
        await personalService.deletePersonal(req.params.id);
        res.end();
        logger.info("DELETE/personal/id");
    }catch(err){
        next(err);
    }
}

async function updatePersonal(req, res, next){
    try{
        let personal = req.body;
        if (!personal.personal_id ||!personal.name ||!personal.cref ||!personal.phone ||!personal.salary){
            throw new Error("ID, Name, CREF, Phone and salary are mandatory");
        }
        personal = await personalService.updatePersonal(personal);
        res.send(personal);
        logger.info(` PUT/personal - ${JSON.stringify(personal)}`);
    }catch(err){
        next(err);
    }
}

export default {
    createPersonal,
    getPersonals,
    getPersonal,
    deletePersonal,
    updatePersonal
}