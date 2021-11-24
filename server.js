const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const port = 2500;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


let mai = [
    {Ruta: "/img/mai1.jpg", Titulo: "Sakurajima"},
    {Ruta: "/img/mai2.jpg", Titulo: "Sakurajima"},
    {Ruta: "/img/mai4.jpg", Titulo: "Sakurajima"},
    {Ruta: "/img/mai5.jpg", Titulo: "Sakurajima"},
    {Ruta: "/img/mai7.jpg", Titulo: "Sakurajima"},
    {Ruta: "/img/mai8.jpg", Titulo: "Sakurajima"},
    {Ruta: "/img/mai9.png", Titulo: "Sakurajima"},
    {Ruta: "/img/mai10.jpg", Titulo: "Sakurajima"},
    {Ruta: "/img/mai11.jpg", Titulo: "Sakurajima"},
];

let largo = mai.length;

let amai = [
    {Ruta: "/img/completamai.jpg"}
]

app.get("/hola", (req, res) => {
    res.render("Index", { mai : mai, largo:largo });
    //res.render("pruebas", { p : p});
});

app.get("/detalles", (req, res) => {
    res.render("Detalles", {amai : amai} );
    //res.render("pruebas", { p : p});
});

app.listen(port, () => {
    console.log(`El puerto es  http://localhost:${port}`);
});