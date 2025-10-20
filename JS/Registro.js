   function formulario(event) {
       event.preventDefault(); 

       let td = document.querySelectorAll("td");

       let nombre = document.getElementById("nombre");
       let user = document.getElementById("Usuario");
       let correo = document.getElementById("Correo");
       let contra = document.getElementById("Contra");

       if (!isNaN(nombre.value)) vaciar(nombre);
       else td[0].innerHTML = nombre.value;

       if (!isNaN(user.value)) vaciar(user);
       else td[1].innerHTML = user.value;

       if (!isNaN(correo.value)) vaciar(correo);
       else td[2].innerHTML = correo.value;

       if (!isNaN(contra.value)) vaciar(contra);
       else td[3].innerHTML = contra.value;
   }

   function vaciar(elemento) {
       alert("Por favor, escribe un texto válido.");
       elemento.value = "";
   }