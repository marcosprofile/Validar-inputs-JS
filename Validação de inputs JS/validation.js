const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmation = document.getElementById('confirmation')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})


/*
*   Verifica se o input está vazio;
*   Se estiver vazio aplica a classe .error
*   Se estiver preenchido aplica a classe .success
*   Se o campo nome ou email estiver preenchido, remove a classe .error com a função removeClass()
*/

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const confirmationValue = confirmation.value.trim()

    if(usernameValue === '') {
        setErrorFor(username, 'Campo requerido')
    } else {
        removeClass(username)
    }

    if(emailValue === '') {
        setErrorFor(email, 'Campo requerido')
    } else {
        removeClass(email)
    }
   
    if(passwordValue === '') {
        setErrorFor(password, 'Campo requerido')

    } else if(passwordValue.length < 8) { 
        setErrorFor(password, 'A senha deve ter no mínimo 8 caracteres')
    } else {
        setSuccessFor(password)
    }

    if(confirmationValue === '') {
        setErrorFor(confirmation, 'Campo requerido')

    } else if(passwordValue !== confirmationValue) { 
        setErrorFor(confirmation, 'As senhas não são iguais. Tente novamente.')
    } else {
        setSuccessFor(confirmation)
    }

}

/*
*   Aplica a classe .error no input vazio
*   Aplica a mensagem definida
*   Define o <small></small> para receber a mensagem definida
*/

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

/*
*   Aplica a classe .success no input preenchido (senha e confirmação de senha)
*/

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

/*
*   Remove a classe
*/

function removeClass(input) {
    const formControl = input.parentElement

    formControl.className = 'form-control'
}