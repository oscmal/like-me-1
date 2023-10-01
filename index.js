const express = require("express");
const cors = require ("cors");
const { getPosts, insertPost } = require("./consultas");
const app = express();

const port = 3000
app.use ( express.json());
app.use (cors());

app.get("/posts", async (req, res) =>{
    const posts = await getPosts();
    res.json(posts);
});

app.post("/posts", async (req, res) =>{
    const post = req.body;
    const result = await insertPost(post);
    res.json(result);
});

app.listen(3000, console.log(`SERVIDOR ENCENDIDO EN PUERTO ${port}`));
