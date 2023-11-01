
	let modal= document.getElementById('meuModal');
    let btn = document.getElementById('botao1');
    let close = document.getElementsByClassName('close')[0];

btn.onclick= function(){
	modal.style.display = 'block';
}
close.onclick = function (){
    clearTimeout(tempo);
	modal.style.display = 'none';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var tempo; 
velocidade = 1000;
var jogador = 0; 
let level = 0;
let errado= 0;

document.querySelector("#jogador");

function addmoeda() {
	var moeda = document.createElement('img');
    moeda.setAttribute("src","imgs/moeda.png");
    moeda.setAttribute("class","moeda");
    var p1 = Math.floor(Math.random() * 1000);
    var p2 = Math.floor(Math.random() * 500);
    moeda.setAttribute("style","left:"+p1+ "px;top:"+p2+"px;");
    moeda.setAttribute("onclick","estourar(this)");
    document.getElementById('arena').appendChild(moeda);
   	
}
function estourar(elemento){
	document.getElementById('arena').removeChild(elemento);
    document.querySelector("#jogador").innerHTML= jogador+=1;
    document.querySelector("#level").innerHTML = "Level " + level ;

    switch(jogador){
        case 10:
            velocidade+= 1000;
            level+=1;
        break
        case 20:
            velocidade+= 2000;
            level+=1;
        break
        case 30:
            velocidade+= 3000;
            level+=1;
        break
        case 40:
            velocidade+= 4000;
            level+=1;
        break
        case 50:
            velocidade+= 5000;
            level+=1;
        break
        case 60:
            velocidade+= 6000;
             level+=1;
        break
        case 70:
            velocidade+= 7000;
            level+=1;
        break
        case 80:
            velocidade+= 8000;
            level+=1;
        break
        case 90:
            velocidade+= 9000;
            level+=1;
        break
        case 100:
            velocidade+= 10000;
            level+=1;
        break
        }
}
function iniciar(){
	tempo = setInterval(addmoeda,velocidade);
}
function parar(){
	clearTimeout(tempo);
}