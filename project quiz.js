function submission(){
let score = 0;

let b = document.getElementById("B").checked;
let h = document.getElementById("H").checked;
let f = document.getElementById("F").checked;
let op = document.getElementById("OP").checked;
let it = document.getElementById("IT").checked;
let ot = document.getElementById("OT").checked;
let s = document.getElementById("S").checked;
let fc = document.getElementById("FC").checked;
let c = document.getElementById("C").checked;
let o = document.getElementById("O").checked;
let ao = document.getElementById("AO").checked;
let at = document.getElementById("AT").checked;
let pl = document.getElementById("PL").checked;
let liga = document.getElementById("LIGA").checked;
let sa = document.getElementById("SA").checked;

if(h){
    score++;
}
if(it){
    score++;
}
if(s){
    score++;
}
if(at){
    score++;
}
if(liga){
    score++;
}

let section = document.getElementById("Score");
let p = document.createElement("p");
p.innerHTML = `You have scored ${score} / 5`;
section.appendChild(p);

}