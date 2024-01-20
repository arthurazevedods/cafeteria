const input_check = document.querySelector("#modo-noturno")
const elemento = document.querySelector("body")

input_check.addEventListener('click',()=>{
    let modo = input_check.checked ? 'dark' : 'light'
    elemento.setAttribute('data-bs-theme', modo)
})