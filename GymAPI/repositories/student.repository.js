import {connect} from "./db.js";

async function insertStudent(student){
    const conn = await connect();
    try{
        const sql = "INSERT INTO students (name, cpf, phone, stature, weight) VALUES ($1, $2, $3, $4, $5) RETURNING *"
        const values = [student.name, student.cpf, student.phone, student.stature, student.weight];
        const res = await conn.query(sql, values);
        return res.rows[0];
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}   

async function getStudents(){
    const conn = await connect();
    try{
        const res = await conn.query("SELECT * FROM students");
        return res.rows;
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}

async function getStudent(id){
    const conn = await connect();
    try{
        const res = await conn.query("SELECT * FROM students WHERE student_id = $1", [id]);
        return res.rows[0];
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}

async function deleteStudent(id){
    const conn = await connect();
    try{
        await conn.query("DELETE FROM students WHERE student_id = $1", [id]);
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}

async function updateStudent(student){
    const conn = await connect();
    try{
        const sql = "UPDATE students SET name = $1, cpf = $2, phone = $3, stature = $4, weight = $5 WHERE student_id = $6 RETURNING *"
        const values = [student.name, student.cpf, student.phone, student.stature, student.weight, student.student_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    }catch(err){
        throw err;
    }finally{
        conn.release();
    }
}



export default {
    insertStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
}