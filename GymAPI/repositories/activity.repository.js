import {connect} from "./db.js";

async function insertActivity(activity){
    const conn = await connect();
    try{
        const sql = "INSERT INTO activity (name, description) VALUES ($1, $2) RETURNING *"
        const values = [activity.name, activity.description];
        const res = await conn.query(sql, values);
        return res.rows[0];
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}   

async function getActivitys(){
    const conn = await connect();
    try{
        const res = await conn.query("SELECT * FROM activity");
        return res.rows;
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}

async function getActivity(id){
    const conn = await connect();
    try{
        const res = await conn.query("SELECT * FROM activity WHERE activity_id = $1", [id]);
        return res.rows[0];
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}

async function deleteActivity(id){
    const conn = await connect();
    try{
        await conn.query("DELETE FROM activity WHERE activity_id = $1", [id]);
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}

async function updateActivity(activity){
    const conn = await connect();
    try{
        const sql = "UPDATE activity SET name = $1, description = $2 WHERE activity_id = $3 RETURNING *"
        const values = [activity.name, activity.description, activity.activity_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}



export default {
    insertActivity,
    getActivitys,
    getActivity,
    updateActivity,
    deleteActivity
}