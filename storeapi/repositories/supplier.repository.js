//import { connect } from "./db.js"
import Supplier from "../models/supplier.model.js";

async function insertSupplier(supplier) {

    try{
        return await Supplier.create(supplier);
    }catch(err){
        throw err;
    }

    /*const conn = await connect();

    try{
        const sql = "INSERT INTO suppliers (name, cnpj, phone, email, address) VALUES ($1, $2, $3, $4, $5) RETURNING *"
        const values = [supplier.name, supplier.cnpj, supplier.phone, supplier.email, supplier.address];
        const res = await conn.query(sql, values);
        return res.rows[0];

    }catch(err){
        throw err;

    } finally{
        conn.release();
    }*/

}

async function getSuppliers(){

    try{
        return await Supplier.findAll();
    }catch(err){
        throw err;
    }

    /*const conn = await connect();

    try {
        const res = await conn.query("SELECT * FROM  suppliers");
        return res.rows;

    }catch(err){
        throw err;

    } finally{
        conn.release();
    }*/
}

async function getSupplier(id){

    try{
        return await Supplier.findByPk(id);
    }catch(err){
        throw err;
    }

    /*const conn = await connect();

    try {
        const res = await conn.query("SELECT * FROM  suppliers WHERE supplier_id = $1", [id]);
        return res.rows[0];

    }catch(err){
        throw err;

    } finally{
        conn.release();
    }*/
}

async function deleteSupplier(id){

    try{
        await Supplier.destroy({
            where:{
                supplierId: id
            }
        });
    }catch(err){
        throw err;
    }

    /*const conn = await connect();

    try {
        await conn.query("DELETE FROM  suppliers WHERE supplier_id = $1", [id]);

    }catch(err){
        throw err;

    } finally{
        conn.release();
    }*/
}

async function updateSupplier(supplier){

    try{
        await Supplier.update(supplier,{
            where:{
                supplierId: supplier.supplierId
            }
        });
        return await getSupplier(supplier.supplierId);
    }catch(err){
        throw err;
    }

    /*const conn = await connect();

    try{
        const sql = "UPDATE suppliers SET name = $1, cnpj =  $2, phone = $3, email =$4, address = $5 WHERE supplier_id = $6 RETURNING *";
        const values = [supplier.name, supplier.cnpj, supplier.phone, supplier.email, supplier.address, supplier.supplier_id];
        const res = await conn.query(sql, values);
        return res.rows[0];

    }catch(err){
        throw err;

    } finally{
        conn.release();
    }*/
}



export default {
    insertSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier
}