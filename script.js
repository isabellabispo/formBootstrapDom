function register(element){

    const username = document.getElementById('userName').value
    const password = document.getElementById('password').value
    const passwordConfirmation = document.getElementById('confirmPassword').value

    console.log(username, password, passwordConfirmation)

    if(password === passwordConfirmation){
        alert("usuário " + username + "" + " registrado")
    }

   else {
       alert("As senhas estão diferentes, confirme novamente a senha")
    }

}
