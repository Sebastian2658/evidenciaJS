var lanzarB = document.getElementById("boton1");
if (lanzarB) lanzarB.addEventListener("click",play,false);
var boton2 = document.getElementById("boton2");
if (boton2) boton2.addEventListener("click",reiniciar,false);
var inicio = true;
var punto = false;
var val = 0;
var res = 0;
var d1 = 0;
var d2 = 0;
var t2 = document.getElementById("txt");
var td1 = document.getElementById("txtd1");
var td2 = document.getElementById("txtd2");

function play(){
if(inicio){
    inicio=false;
    d1=(Math.floor(Math.random()*100))%6+1;
    d2=(Math.floor(Math.random()*100))%6+1;
    val= d1 + d2;
    document.getElementById("d1").src=("../imgs/"+d1+".png");
    document.getElementById("d2").src=("../imgs/"+d2+".png");
    td1.textContent="Dado 1: "+d1;
    td2.textContent="Dado 2: "+d2;
    if(val==2 || val==3 || val==12) t2.textContent="PERDISTE";
    else if(val==7 || val==11) t2.textContent="GANASTE";
    else {
        punto=true;
        t2.textContent="PUNTO: "+val;
    }
}

else if(punto){
    d1=(Math.floor(Math.random()*100))%6+1;
    d2=(Math.floor(Math.random()*100))%6+1;
    res= d1 + d2;
    document.getElementById("d1").src=("../imgs/"+d1+".png");
    document.getElementById("d2").src=("../imgs/"+d2+".png");
    td1.textContent="Dado 1: "+d1;
    td2.textContent="Dado 2: "+ d2;
    t2.textContent="Vuelve y tira"; 
    if(res==7) {
        punto=false

        t2.textContent="PERDISTE";
    }
    else if(res==val){
        t2.textContent="GANASTE";
        punto=false
    } 
}  
}

function reiniciar (){
location.reload();
}
