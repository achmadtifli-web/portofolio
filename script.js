const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (!navbar) return;
  navbar.style.boxShadow = window.scrollY > 20 ? '0 12px 35px rgba(0,0,0,.18)' : 'none';
});
