console.log("hola")
const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'hola desde node');

const arreglo = [5000, 60, 90, 100, 10, 20, 0, 120, 2000, 340, 1000, 50];

for(let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}