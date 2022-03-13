const filesystem = require('fs');

const movies = [];
const videog = [];
const icecream = [];

const http = require('http');

const server = http.createServer( (request, response) => {

    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Lab 10</title></head>');
        response.write('<body>');
        response.write('<h1>Lab 10: Rutas y formas</h1>');
        response.write('<h2>Listas:</h2>');
        response.write('<h4>Lista de Videojuegos:</h4>');
        response.write('<div class="list-item">');
        for (let i in videog) {
            response.write('<li>' + videog[i] + '</li>');
        }
        response.write('</div><br>');
        response.write('<a href="/videog"> <button >Agregar un Videojuego</button></a></div><br>')
        response.write('<h4>Sabores de Helado:</h4>');
        response.write('<div class="list-item">');
        for (let i in icecream) {
            response.write('<li>' + icecream[i] + '</li>');
        }
        response.write('</div><br>');
        response.write('<a href="/icecream"> <button>Agregar un Helado</button></a></div><br>')
        response.write('<h4>Lista de Peliculas:</h4>');
        response.write('<div class="list-item">');
        for (let i in movies) {
            response.write('<li>' + movies[i] + '</li>');
        }
        response.write('</div><br>');
        response.write('<a href="/movies"> <button>Agregar una pelicula</button></a></div><br>')
        response.write('</div></section>');   
        response.write('</body></html>');
        response.end();


    } else if (request.url === '/videog' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Lab 10</title></head>');
        response.write('<body>');
        response.write('<h1>Lab 10: Rutas y formas</h1>');
        response.write('<section>');
        response.write('<h2>Lista de Videojuegos</h2><br>');
        response.write('<form action="/videog" method="POST">');
        response.write('<label for="nombre">Nuevo Videojuego: </label>');
        response.write('<input type="text" name="nombre" required>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<a href="/">Regresar a la pagina principal</a>');
        response.write('</section></div>');
        response.write('</br>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/videog' && request.method === 'POST') {
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            const nuevo_dato = datos_completos.split('=')[1];
            videog.push(nuevo_dato);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Lab 10</title></head>');
            response.write('<body>');
            response.write('<h1>Lab 10: Rutas y formas</h1>');
            response.write('<section>');
            response.write('<h2>Lista de Videojuegos</h2><br>');
            response.write('<p>Lista:</p>');
            response.write('<div class="list-item">');
            for (let i in videog) {
                response.write('<li>' + videog[i] + '</li>');
            }
            response.write('</div>');
            response.write('<a href="videog">Agregar otro videojuego</a>');
            response.write('</section></div>');
            response.write('</body>');
            return response.end();
        });


    }else if (request.url === '/icecream' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Lab 10</title></head>');
        response.write('<body>');
        response.write('<h1>Lab 10: Rutas y formas</h1>');
        response.write('<section>');
        response.write('<h2>Lista de Helados</h2><br>');
        response.write('<form action="/icecream" method="POST">');
        response.write('<label for="nombre">Nuevo Helado: </label>');
        response.write('<input type="text" name="nombre" required>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<a href="/">Regresar a la pagina principal</a>');
        response.write('</section></div>');
        response.write('</br>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/icecream' && request.method === 'POST') {
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            const nuevo_dato = datos_completos.split('=')[1];
            icecream.push(nuevo_dato);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Lab 10</title></head>');
            response.write('<body>');
            response.write('<h1>Lab 10: Rutas y formas</h1>');
            response.write('<section>');
            response.write('<h2>Lista de Helados</h2><br>');
            response.write('<p>Lista:</p>');
            response.write('<div class="list-item">');
            for (let i in icecream) {
                response.write('<li>' + icecream[i] + '</li>');
            }
            response.write('</div>');
            response.write('<a href="icecream">Agregar otro helado</a>');
            response.write('</section></div>');
            response.write('</body>');
            return response.end();
        });

    
    }else if (request.url === '/movies' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Lab 10</title></head>');
        response.write('<body>');
        response.write('<h1>Lab 10: Rutas y formas</h1>');
        response.write('<section>');
        response.write('<h2>Lista de Peliculas</h2><br>');
        response.write('<form action="/movies" method="POST">');
        response.write('<label for="nombre">Nueva Pelicula: </label>');
        response.write('<input type="text" name="nombre" required>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<a href="/">Regresar a la pagina principal</a>');
        response.write('</section></div>');
        response.write('</br>');
        response.write('</body>');
        response.end();
    } else if (request.url === '/movies' && request.method === 'POST') {
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            const nuevo_dato = datos_completos.split('=')[1];
            movies.push(nuevo_dato);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Lab 10</title></head>');
            response.write('<body>');
            response.write('<h1>Lab 10: Rutas y formas</h1>');
            response.write('<section>');
            response.write('<h2>Lista de Peliculas</h2><br>');
            response.write('<p>Lista:</p>');
            response.write('<div class="list-item">');
            for (let i in movies) {
                response.write('<li>' + movies[i] + '</li>');
            }
            response.write('</div>');
            response.write('<a href="movies">Agregar otra pelicula</a>');
            response.write('</section></div>');
            response.write('</body>');
            return response.end();
        });

    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>a | Page not found</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>La página '+ request.url +' no se encontró</h1>');
        response.write('</body>');
        response.end();
    }

});

server.listen(3000);