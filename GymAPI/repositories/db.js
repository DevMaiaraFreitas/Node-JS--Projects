import pg from "pg";

async function connect(){
    if (global.connection){
        return global.connection.connect();
    }
    const pool = new pg.Pool({
        connectionString: "postgres://ovszlczb:7XAfc3hd5DvjP0-n_NoXKnDjzbTCaSy9@kesavan.db.elephantsql.com/ovszlczb"
    });
    global.connection = pool;

    return pool.connect();
}

export {
    connect
}