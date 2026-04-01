const menuBtn = document.querySelector('.menu_button');
const spNav = document.querySelector('.sp_nav');

menuBtn.addEventListener('click', () => {
  spNav.classList.toggle('open');
});