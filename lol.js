function mostrarSenha(){
    var InputPass = document.getElementById("password")
    var btnShowPass = document.getElementById("btn-senha")

    if(InputPass.type === "password"){
        InputPass.setAttribute("type",(Text))
        btnShowPass.classList.replace("bi-eye-fill","bi-eye-slash-fill")
    }
}