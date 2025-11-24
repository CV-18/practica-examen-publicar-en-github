const mascota = document.getElementById('mascota');
window.addEventListener('mousemove', (e) => {
  mascota.style.transform = `translate(${e.clientX - 32}px, ${e.clientY - 32}px)`;
});
