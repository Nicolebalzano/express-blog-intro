import express from "express";
import fs from "fs";
const port = 3000;
const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
    const resData = {
        data : "Server del mio blog"
    }
    res.json(resData)
})

// - Creiamo poi una rotta `/bacheca` che restituisca un oggetto json con la lista dei post e il conteggio,
//  partendo da un array.
// - Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate
//  ad ogni post.
// - Testare su postman
const dataJson = fs.readFileSync("./data/myBlog.json", "utf-8");
const bacheca = JSON.parse(dataJson);
app.get("/bacheca", (req, res) => {
const resData = {
    data : bacheca,
};
 res.json(resData)
})
app.listen(port, () => {
    console.log("Server in ascolto")
})