const express = require('express');

const router = express.Router();

const movies = [];
const videog = [];
const icecream = [];


router.get('/', (request, response, next) => {
    let title = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 11</title></head><body><h1>Lab 11: Express</h1></div></section><section><div><div> <br><br></div><h4>Lista de Videojuegos:</h4> <div class="list-item">';
    for (let i in videog) {
        title += '<li>' + videog[i] + '</li>';
    }
    title += '</div><br><div> <a href="/videog"> <button>Agregar un Videojuego</button></a></div><br>';
    title += '<h4>Sabores de Helado:</h4> <div class="list-item">';
    for (let i in icecream) {
        title += '<li>' + icecream[i] + '</li>';
    }
    title += '</div><br><div> <a href="/icecream"> <button>Agregar un Helado</button></a></div><br>';
    title += '<h4>Lista de Peliculas:</h4> <div class="list-item">';
    for (let i in movies) {
        title += '<li>' + movies[i] + '</li>';
    }
    title += '</div><br><div> <a href="/movies"> <button>Agregar una Pelicula</button></a></div><br>';
    response.send(title);
});

router.get('/videog', (request, response, next) => {
    let title = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 11</title></head><body><h1>Lab 11: Express</h1></div></section><section><div><div></div><h4>Lista de Videojuegos:</h4> <div class="list-item"></p></div></section> <section><div><form action="/videog" method="POST"> <label for="nombre">Nombre del videojuego: </label> <input type="text" name="nombre" required> <input type="submit" value="Enviar"> </form> <br><br><a href="/">Regresar a la pagina principal</a> </section></div></br> </body>';
    response.send(title);
});

router.post('/videog', (request, response, next) => {
    videog.push(request.body.nombre);
    response.status = 303;
    response.redirect('/');
});

router.get('/icecream', (request, response, next) => {
    let title = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 11</title></head><body><h1>Lab 11: Express</h1></div></section><section><div><div></div><h4>Lista de Helados:</h4> <div class="list-item"></p></div></section> <section><div><form action="/icecream" method="POST"> <label for="nombre">Sabor del helado: </label> <input type="text" name="nombre" required> <input type="submit" value="Enviar"> </form> <br><br><a href="/">Regresar a la pagina principal</a> </section></div></br> </body>';
    response.send(title);
});

router.post('/icecream', (request, response, next) => {
    icecream.push(request.body.nombre);
    response.status = 303;
    response.redirect('/');
});

router.get('/movies', (request, response, next) => {
    console.log(request.body);
    let title = '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laboratorio 11</title></head><body><h1>Lab 11: Express</h1></div></section><section><div><div></div><h4>Lista de Peliculas:</h4> <div class="list-item"></p></div></section> <section><div><form action="/movies" method="POST"> <label for="nombre">Nombre de la pelicula: </label> <input type="text" name="nombre" required> <input type="submit" value="Enviar"> </form> <br><br><a href="/">Regresar a la pagina principal</a> </section></div></br> </body>';
    response.send(title);
});

router.post('/movies', (request, response, next) => {
    movies.push(request.body.nombre);
    response.status = 303;
    response.redirect('/');
});




module.exports = router;