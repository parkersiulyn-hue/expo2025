let a=2,s=0;

function verde0(){
      a=a+1;
  document.getElementById('correo0').style.backgroundColor = 'green';
}
function verde2(){
  document.getElementById('correo2').style.backgroundColor = 'green';
    a=a+1;
}
function verde3(){
  document.getElementById('correo4').style.backgroundColor = 'green';
    a=a+1;
}
function verde4(){
  document.getElementById('correo6').style.backgroundColor = 'green';
    a=a+1;
}
function rojo(){
  document.getElementById('correo3').style.backgroundColor = 'red';
    alert("Ha ingresado un virus")
      a=a-1;
}
function rojo2(){
  document.getElementById('correo5').style.backgroundColor = 'red';
  alert("Ha ingresado un virus")
      a=a-1;
}

function ocultar(){
        const contenido = document.getElementById("main");
        contenido.style.display = "block"; 
        const boton = document.getElementById("empezar");
        boton.style.display = "none"; 
        const botont = document.getElementById("terminar");
        botont.style.display = "block"; 
}
function terminar(){
          const botont = document.getElementById("terminar");
        botont.style.display = "none"; 
        const resultado = document.getElementById("puntaje");
        resultado.innerHTML="Su puntaje es de "+a+"/6";
 

       resultado.style.display = "block"; 
               const contenido = document.getElementById("main");
        contenido.style.display = "none"; 
                const incase = document.getElementById("incase");
        incase.style.display = "none"; 
const item = document.getElementById("terminar-item");
item.style.display= "block";

const footer = document.getElementById("pieprincipal");
footer.style.bottom = "-1320px";

        
}

