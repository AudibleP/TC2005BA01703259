function validarpass() {
    let pass = document.getElementById("password");
    let c_pass = document.getElementById("secondPassword");

    if(pass.value != c_pass.value){
        document.getElementById("passInput").innerHTML = "Not the same Password.";

    }else{
        document.getElementById("passInput").innerHTML = "Correct Password.";
    }
}

var total = 0;
var amount_NS = 0;
var amount_SNES = 0;
var amount_N64 = 0;

const vali = document.getElementById("Validate");
const nintendoSwitchAdd = document.getElementById("nintendoSwitchAdd");
const SNESAdd = document.getElementById("SNESAdd");
const N64Add = document.getElementById("N64Add");
const nintendoSwitchRemove = document.getElementById("nintendoSwitchRemove");
const SNESRemove = document.getElementById("SNESRemove");
const N64Remove = document.getElementById("N64Remove");

function add_NintendoSwitch() {
    let NS_Price = parseInt(document.getElementById("NS_Price").innerHTML);
    total = total + NS_Price + 800;
    document.getElementById("total").innerHTML = total;
    amount_NS++;
    document.getElementById("amount_NS").innerHTML = amount_NS;
}

function add_SNES() {
    let SNES_Price = parseInt(document.getElementById("SNES_Price").innerHTML);
    total = total + SNES_Price + 480;
    document.getElementById("total").innerHTML = total;
    amount_SNES++;
    document.getElementById("amount_SNES").innerHTML = amount_SNES;
}

function add_N64() {
    let N64_Price = parseInt(document.getElementById("N64_Price").innerHTML);
    total = total + N64_Price + 640;
    document.getElementById("total").innerHTML = total;
    amount_N64++;
    document.getElementById("amount_N64").innerHTML = amount_N64;
}

function rem_NintendoSwitch() {
    let NS_Price = parseInt(document.getElementById("NS_Price").innerHTML);
    total = total - NS_Price - 800;
    document.getElementById("total").innerHTML = total;
    amount_NS--;
    document.getElementById("amount_NS").innerHTML = amount_NS;
}

function rem_SNES() {
    let SNES_Price = parseInt(document.getElementById("SNES_Price").innerHTML);
    total = total - SNES_Price - 480;
    document.getElementById("total").innerHTML = total;
    amount_SNES--;
    document.getElementById("amount_SNES").innerHTML = amount_SNES;
}

function rem_N64() {
    let N64_Price = parseInt(document.getElementById("N64_Price").innerHTML);
    total = total - N64_Price - 640;
    document.getElementById("total").innerHTML = total;
    amount_N64--;
    document.getElementById("amount_N64").innerHTML = amount_N64;
}

vali.onclick = validarpass;

nintendoSwitchAdd.onclick = add_NintendoSwitch;
SNESAdd.onclick = add_SNES;
N64Add.onclick = add_N64;
nintendoSwitchRemove.onclick = rem_NintendoSwitch;
SNESRemove.onclick = rem_SNES;
N64Remove.onclick = rem_N64;
