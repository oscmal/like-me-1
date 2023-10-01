const { Pool } = require('pg');

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "postgres",
    port: 5432,
    database: "likeme",
    allowExitOnIdle: true,
});

const getPosts = async () =>{
    const result = await pool.query("select * from posts");
    return result.rows;
};

const insertPost = async (post) => {
    const values = Object.values(post);
    const consulta = " insert into posts values (default, $1, $2, $3, default)"
    const result = await pool.query (consulta, values);
    return result;
};

module.exports = { getPosts, insertPost };

