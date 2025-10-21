// ---- CARRUSEL ----
const slides = document.getElementById('carouselSlides');
if (slides) { // ✅ solo corre si existe
  const total = slides.children.length;
  let index = 0;

  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');

  function update(){ slides.style.transform = `translateX(-${index*100}%)`; }

  if (prev) prev.onclick = ()=>{ index = (index - 1 + total) % total; update(); };
  if (next) next.onclick = ()=>{ index = (index + 1) % total; update(); };

  setInterval(()=>{ index = (index + 1) % total; update(); }, 6000);
}

  // ---- LOGIN ----
  const form=document.getElementById('loginForm');
  const msg=document.getElementById('mensaje');

 // ---- LOGIN ----
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const msg  = document.getElementById('mensaje');
  if (!form || !msg) return; // ✅ si no existe el form (u otra página), no hace nada

  form.addEventListener('submit', e => {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value.trim();
    const clave   = document.getElementById('clave').value.trim();

    // Leer datos guardados por el registro
    const guardado = JSON.parse(localStorage.getItem('usuarioSecLab'));

    if (!guardado) {
      msg.textContent = "No hay usuarios registrados aún.";
      msg.className   = "mensaje error";
      msg.style.display = "block";
      return;
    }

    if (usuario === guardado.usuario && clave === guardado.clave) {
      msg.textContent = `¡Bienvenido, ${usuario}!`;
      msg.className   = "mensaje exito";
      msg.style.display = "block";
      setTimeout(()=>window.location.href="index.html", 2000);
    } else {
      msg.textContent = "⚠️ Usuario o contraseña incorrectos.";
      msg.className   = "mensaje error";
      msg.style.display = "block";
    }
  });
});





// Permite que el botón con onclick="redirigir()" dispare la validación del login
function redirigir(){
  const form = document.getElementById('loginForm');
  if (form) form.dispatchEvent(new Event('submit', { cancelable: true }));
}
