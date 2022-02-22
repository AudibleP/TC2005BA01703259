
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
    let res_prob = `Arreglo: ${x}<br> Numeros -s: ${negativos}<br> 0s: ${ceros}<br> Numeros +s: ${positivos}<br>`;
    document.getElementById("res_prob3").innerHTML = res_prob;
}

let boton_prob4 = document.getElementById("problema4");
let y = [[1,2,3,4,5,6],[7,6,4,5,5,9],[19,27,35,46,58,63],[6,3,2,9,10,8],[192,218,390,338,280,115],[36,58,28,53,87,11]];
let matriz = "[1,2,3,4,5,6],[7,6,4,5,5,9],[19,27,35,46,58,63],[6,3,2,9,10,8],[192,218,390,338,280,115],[36,58,28,53,87,11]<br>"
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
    let res_prob = `Matriz original: <br> ${matriz} <br> Los promedios son: ${promedios_array}`;
    document.getElementById("res_prob4").innerHTML = res_prob;
}

var numero = Math.floor( Math.random() * 100);

function inverso(numero){

  var invertido = 0
  var resto = numero
  do {
    invertido = invertido * 10 + (resto % 10)
    resto = Math.floor(resto / 10)
  } while ( resto > 0 )

  respuesta = "Número = " + numero +"<br></br>" + "Invertido: " + invertido
  return respuesta

}
document.getElementById("resultados5").innerHTML = inverso(numero);


const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Despiertas despues de un dia muy pesado y tienes que ir al Tec, antes de irte ves tu mochila con tu laptop.',
    options: [
      {
        text: 'Llevar laptop',
        setState: { laptop: true },
        nextText: 2
      },
      {
        text: 'No llevar laptop',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Al llegar al tec y dirigirte a tu primera clase (Construcción de software y toma de decisiones) decides:',
    options: [
      {
        text: 'Sacar tu laptop para prestar toda la atencion.',
        requiredState: (currentState) => currentState.laptop,
        nextText: 3
      },
      {
        text: 'No sacar la laptop y prestar media atencion',
        nextText: 4
      },
      {
        text: 'No entrar a la clase...',
        nextText: 5
      }
    ]
  },
  {
    id: 3,
    text: 'Despues de que terminan las clases de Lalo y Ricardo, se acercan a ti y te otorgan un 100 en la materia.',
    options: [
      {
        text: 'Felicidades, Jugar otra vez?',
        nextText: -1
      }
    ]
  },
  {
    id: 4,
    text: 'Te quedas medio dormido en clase, pero Lalo y Ricardo no se dan cuanta y al final pasa la materia con 70.',
    options: [
      {
        text: 'Felicidades??? Jugar otra vez?',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Ya que no estraste a clase tienes varias opciones.',
    options: [
      {
        text: 'Ir a desayunar.',
        nextText: 6
      },
      {
        text: 'Ir a jugar con tus amigos.',
        nextText: 7
      },
      {
        text: 'Ir a estaduiar a biblioteca',
        requiredState: (currentState) => currentState.laptop,
        setState: { laptop: false, conocimiento: true },
        nextText: 8
      },
      {
        text: 'Regresar a tu casa',
        nextText: 9
      }
    ]
  },
  {
    id: 6,
    text: 'Desayunas chilaquiles verdes en Cafe y aunque reprobaste lo hiciste con estomago lleno.',
    options: [
      {
        text: 'Jugar otra vez?',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: 'Reprobaste la materia, pero te divertiste con tus amigos.',
    options: [
      {
        text: 'Jugar otra vez?',
        nextText: -1
      }
    ]
  },
  {
    id: 8,
    text: 'Estudiaste bastante para poder pasar la materia, decides:.',
    options: [
      {
        text: 'Regresar a tu casa.',
        nextText: 10
      },
      {
        text: 'Intentar pasar la materia.',
        nextText: 11
      }
    ]
  },
  {
    id: 9,
    text: 'Te sientes descansado, pero reprobaste la materia...',
    options: [
      {
        text: 'Jugar otra vez?',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'PORQUE REGRESASTE?! YA ESTABAS PREPARADO!!! MUY MAL...',
    options: [
      {
        text: 'Reprobaste, jugar otra vez?',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'Despues de una leccion de vida de Ricardo y Lalo, logras pasar la materia.',
    options: [
      {
        text: 'Filicidades, jugar otra vez?.',
        nextText: -1
      }
    ]
  }
]

startGame()


boton_prob1.onclick = prob1;
boton_prob2.onclick = prob2;
boton_prob3.onclick = prob3(x);
boton_prob4.onclick = prob4(y);