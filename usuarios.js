function Login1(){  
var usuario=document.getElementById("ingresousuario").value; 
var contra=document.getElementById("ingresocontra").value; 
var u1="yaja";
var c1=123;
if( usuario==u1 && contra==c1){
	window.location="bienvenida.HTML";

} 
if (usuario=="" && contra=="") { 

window.location="errorpopup.html"; 
} 

 }
  