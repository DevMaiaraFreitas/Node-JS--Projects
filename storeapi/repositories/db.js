//import pg from "pg";
import Sequelize from "sequelize";

/* sem a utilização do sequelize
async function connect(){

    if(global.connection){
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://hqfxaeit:ezElPZLuD8qZBiwhYRq94I-jDkGgnqrT@kesavan.db.elephantsql.com/hqfxaeit"
    });
    global.connection = pool;

    return pool.connect();
}*/

const sequelize = new Sequelize(
    "postgres://hqfxaeit:ezElPZLuD8qZBiwhYRq94I-jDkGgnqrT@kesavan.db.elephantsql.com/hqfxaeit",
    {
        dialect: "postgres",
        define:{
            timestamps: false
        }
    }

)

/*export  {
    connect
}*/

export default sequelize;