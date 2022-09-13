import {connect} from "./db.js";

async function insertPersonal(personal){
    const conn = await connect();
    try{
        const sql = "INSERT INTO personal (name, cref, phone, salary) VALUES ($1, $2, $3, $4) RETURNING *"
        const values = [personal.name, personal.cref, personal.phone, personal.salary];
        const res = await conn.query(sql, values);
        return res.rows[0];
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}   

async function getPersonals(){
    const conn = await connect();
    try{
        const res = await conn.query("SELECT * FROM personal");
        return res.rows;
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}

async function getPersonal(id){
    const conn = await connect();
    try{
        const res = await conn.query("SELECT * FROM personal WHERE personal_id = $1", [id]);
        return res.rows[0];
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}

async function deletePersonal(id){
    const conn = await connect();
    try{
        await conn.query("DELETE FROM personal WHERE personal_id = $1", [id]);
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}

async function updatePersonal(personal){
    const conn = await connect();
    try{
        const sql = "UPDATE personal SET name = $1, cref = $2, phone = $3, salary = $4 WHERE personal_id = $5 RETURNING *"
        const values = [personal.name, personal.cref, personal.phone, personal.salary, personal.personal_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}



export default {
    insertPersonal,
    getPersonals,
    getPersonal,
    updatePersonal,
    deletePersonal
}