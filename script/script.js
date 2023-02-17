const btn = document.querySelector(".menu-btn");
const body = document.querySelector("body");
const close = document.querySelector(".close");

btn.addEventListener('click', () => {
  body.classList.toggle('blocked')
});

close.addEventListener('click', () =>{
  body.classList.toggle('blocked')
  btn.checked = false
});

