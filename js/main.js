const menuToggle = document.querySelector(".toggle");
const navegation = document.querySelector(".nav")

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('ativo')
    navegation.classList.toggle('ativo')
})


