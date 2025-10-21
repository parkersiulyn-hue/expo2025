   function formulario(event) {
       event.preventDefault(); 

       // 1) Leer los valores escritos por el usuario
const datos = {
  usuario: document.getElementById("Usuario").value.trim(),
  clave:   document.getElementById("Contra").value.trim(),
  nombre:  document.getElementById("nombre").value.trim(),
  correo:  document.getElementById("Correo").value.trim()
};

// 2) Guardarlos en localStorage como JSON
localStorage.setItem("usuarioSecLab", JSON.stringify(datos));


window.location.href = "login.html"; 
   }

   function vaciar(elemento) {
       alert("Por favor, escribe un texto válido.");
       elemento.value = "";
   }