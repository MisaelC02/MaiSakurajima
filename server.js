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
    { Ruta: "/img/mai1.jpg", Titulo: "Sakurajima" },
    { Ruta: "/img/mai2.jpg", Titulo: "Sakurajima" },
    { Ruta: "/img/mai4.jpg", Titulo: "Sakurajima" },
    { Ruta: "/img/mai5.jpg", Titulo: "Sakurajima" },
    { Ruta: "/img/mai7.jpg", Titulo: "Sakurajima" },
    { Ruta: "/img/mai8.jpg", Titulo: "Sakurajima" },
    { Ruta: "/img/mai9.png", Titulo: "Sakurajima" },
    { Ruta: "/img/mai10.jpg", Titulo: "Sakurajima" },
    { Ruta: "/img/mai11.jpg", Titulo: "Sakurajima" },
    { Ruta: "/img/mai12.jpg", Titulo: "Sakurajima" },
    { Ruta: "/img/mai13.jpg", Titulo: "Sakurajima" },
    { Ruta: "/img/mai14.jpg", Titulo: "Sakurajima" },
    { Ruta: "/img/sakurajima.gif", Titulo: "Sakurajima" },
    { Ruta: "/img/sakurajima1.gif", Titulo: "Sakurajima" },
    { Ruta: "/img/sakurajima2.gif", Titulo: "Sakurajima" },
    { Ruta: "/img/sakurajima3.gif", Titulo: "Sakurajima" },
    { Ruta: "/img/sakurajima4.gif", Titulo: "Sakurajima" },
    { Ruta: "/img/sakurajima5.gif", Titulo: "Sakurajima" },
    { Ruta: "/img/sakurajima6.gif", Titulo: "Sakurajima" },
    { Ruta: "/img/sakurajima7.gif", Titulo: "Sakurajima" },
    { Ruta: "/img/sakurajima8.gif", Titulo: "Sakurajima" },
    { Ruta: "/img/sakurajima9.gif", Titulo: "Sakurajima" },
    { Ruta: "/img/sakurajima10.gif", Titulo: "Sakurajima" },
    { Ruta: "/img/sakurajima11.gif", Titulo: "Sakurajima" },
    { Ruta: "/img/sakurajima12.gif", Titulo: "Sakurajima" },
    { Ruta: "/img/sakurajima13.gif", Titulo: "Sakurajima" },
];

let largo = mai.length;

let amai = [{ Ruta: "/img/completamai.jpg" }];

app.get("/hola", (req, res) => {
    res.render("Index", { mai: mai, largo: largo });
    //res.render("pruebas", { p : p});
});

app.get("/detalles", (req, res) => {
    res.render("Detalles", { amai: amai });
    //res.render("pruebas", { p : p});
});

app.listen(port, () => {
    console.log(`El puerto es  http://localhost:${port}`);
});
