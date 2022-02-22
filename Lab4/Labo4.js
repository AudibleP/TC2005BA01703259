
//Problema 1
let boton_prob1 = document.getElementById("problema1");
function prob1(){
    document.write("Recarga la pagina para regresar");
    let num = prompt("Ingresa un numero positivo para conocer todos los valores en N, N^2 y N^3 hasta llegar a el.");
    document.write("<style> table,th,td{border: 1px solid black;}</style>")
    document.write("<table><thead><tr><th> N </th><th> N^2 </th><th> N^3 </th></tr></thead>");
    for (let i = 1; i <= num; i++){
        document.write("<tr><th>" + i + "</th><th>" + i*i + "</th><th>" + i*i*i + "</th></tr>")
    }
    document.write("</table>");
}

//Problema 2
let boton_prob2 = document.getElementById("problema2");
function prob2(){
    let num1 = Math.floor(Math.random() * 20);
    let num2 = Math.floor(Math.random() * 20);
    let resultado = num1 + num2;

    let tiempoInicio = Date.now();
    let respuesta = prompt ("Resuelva la siguiente suma: " + num1 +" + " + num2);
    let tiempoFinal = Date.now();

    let tiempo = (tiempoFinal- tiempoInicio) / 1000;

    let res_prob = `Tu respuesta es ${respuesta == resultado ? 'correcta' : 'incorrecta'} y tardaste ${tiempo} segundos en responder.`;
    document.getElementById("res_prob2").innerHTML = res_prob;
}

//Problema 3
let boton_prob3 = document.getElementById("problema3");
var x = [5,0,-65,1,2,3,4,5,12,33,22,0,0,0,-9,-99,-54,1,2,3,0,0,0,0,3,46,89,-8,-87];
function prob3(arreglo){
    let negativos = 0;
    let ceros = 0; 
    let positivos = 0;

    for (let i = 0; i < arreglo.length; i++){
        if (arreglo[i] < 0){
            negativos++;
        } 
        else if (arreglo[i] == 0){
            ceros++;
        }
        else {
            positivos++;
        }
    }
    let res_prob = `Arreglo: ${x}<br> Numeros negativos: ${negativos}<br> Cantidad de 0s: ${ceros}<br> Numeros positivos: ${positivos}<br>`;
    document.getElementById("res_prob3").innerHTML = res_prob;
}

//Problema 4
let boton_prob4 = document.getElementById("problema4");
let y = [[66,65,36,89,80,43],[77,68,45,56,56,96],[79,27,75,56,8,13],[36,93,72,59,70,48],[92,18,90,38,80,15],[96,28,18,73,87,61]];
let matriz = "[66,65,36,89,80,43]<br>[77,68,45,56,56,96]<br>[79,27,75,56,8,13]<br>[36,93,72,59,70,48]<br>[92,18,90,38,80,15]<br>[96,28,18,73,87,61]<br>"
function prob4(matrix){
    let promedios = 0;
    let promedios_array = new Array; 
    for (let i = 0; i < matrix.length; i++) {
        let suma = 0;
        let contador = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            suma += matrix[i][j];
        }
        contador += suma;
        promedios = contador/matrix.length;
        promedios_array.push((" " + promedios.toFixed(2))); 
    }
    let res_prob = `La matriz original: <br> ${matriz} <br> Los promedios de cada renglon son: ${promedios_array}`;
    document.getElementById("res_prob4").innerHTML = res_prob;
}

//Problema 5
let boton_prob5 = document.getElementById("problema5");
var num_inv = 0;
function prob5(z) {
    var num_inv = prompt("Ingresa un número para conocer su inverso.");
    z = num_inv;
    let inverso = z.split('').reverse().join('');

    let res_prob = `El inverso del numero que ingresaste es : ${inverso}`;
    document.getElementById("res_prob5").innerHTML = res_prob;
}






boton_prob1.onclick = prob1;
boton_prob2.onclick = prob2;
boton_prob3.onclick = prob3(x);
boton_prob4.onclick = prob4;
boton_prob5.onclick = prob5;
boton_prob6.onclick = prob6;