const login = document.querySelector('#login');
const register = document.querySelector('#register');
const registerLink = document.querySelector('#register-link');
const loginLink=document.querySelector('#login-link');




registerLink.addEventListener('click', () => mostrarocultarlogreg()) 


loginLink.addEventListener('click', () => mostrarocultarlogreg()) 

const mostrarocultarlogreg=() => {
    login.classList.toggle('hidden')
    register.classList.toggle('hidden')
}

