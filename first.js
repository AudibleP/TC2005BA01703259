const character = "webo";

console.log(character);

for(let i = 1; i <= 10; i++){
    console.log(i);
}

alert("Esto es una alerta");

const name = prompt("Name?");
console.log("name");
const answer = confirm("sure?");
console.log("answer");

function brake(){
    console.log("webo se rompe");
}
brake();

const bake = (character) => console.log(character + " se cocio.")

bake(character);

const characters = ["huevo"];
characters.push(character);
characters[2] = "egg";

characters["AAAAAAAAA"] = 100;

console.log(characters);

document.getElementById("salida").innerHTML = "Aqui van las salidas.";