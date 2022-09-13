import {connect} from "./db.js";
import studentRepository from "./student.repository.js";

async function insertTraining(training){
    const conn = await connect();
    try{
        const sql = "INSERT INTO training (date, student_id, activity_id, personal_id) VALUES ($1, $2, $3, $4) RETURNING *"
        const values = [training.date, training.student_id, training.activity_id, training.personal_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}   

async function getTrainings(){
    const conn = await connect();
    try{
        const res = await conn.query("SELECT * FROM training");
        return res.rows;
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}

async function getTraining(id){
    const conn = await connect();
    try{
        const res = await conn.query("SELECT * FROM training WHERE training_id = $1", [id]);
        return res.rows[0];
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}

async function deleteTraining(id){
    const conn = await connect();
    try{
        await conn.query("DELETE FROM training WHERE training_id = $1", [id]);
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}

async function updateTraining(training){
    const conn = await connect();
    try{
        const sql = "UPDATE training SET  date = $1, student_id= $2, activity_id= $3, personal_id=$4  WHERE training_id = $5 RETURNING *"
        const values = [training.date, training.student_id, training.activity_id, training.personal_id, training.training_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}



export default {
    insertTraining,
    getTrainings,
    getTraining,
    updateTraining,
    deleteTraining
}