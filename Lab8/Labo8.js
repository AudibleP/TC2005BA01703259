// ---------------Exercise1-------------------
function ex1(_array) {
    let summation = 0;
    for (let elemento of _array) {
        summation += elemento;
    }
    let avg = summation / _array.length;
    return avg;
}

let arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = Math.floor(Math.random()*20)
}

let answer1 = ex1(arr);
console.log('Array: ' + '[' + arr.toString() + ']')
console.log('Average: ' + answer1);

// ----------------Exercise2------------------
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("Type your favorite character's name:", name => {
    const filesystem = require('fs');
    filesystem.writeFileSync('Name.txt', name);
    readline.close();
  });

// ----------------Exercise3---------------------
//Bubble Sort
function bubble(_array)
{
    for(j=0;j<_array.length;j++)
    {
        for(i=0;i<_array.length;i++)
        {
            //Si el elemento en array[i] es mayor al elemento que sigue
            if(_array[i]>_array[i+1])
            {
                //Realizamos un swap
                var aux=_array[i];
                _array[i]=_array[i+1];
                _array[i+1]=aux;
            }
        }
    }
    return _array;
}
console.log('El array ordenado de',arr, )
let Test = bubble(arr);
console.log('es:',Test)
// ---------------------------------------------

const http = require('http');
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Laboratorio 8 </title></head><body><h1>Ricardo Nunez Alanis</h1></body></html>');
    response.end();
});

// -------------------------------------

server.listen(3000);