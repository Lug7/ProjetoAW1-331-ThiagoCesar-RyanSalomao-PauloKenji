var nome = document.getElementById("nome");
var email = document.getElementById("email");
var texto = document.getElementById("texto");

var submit = document.getElementById("submit")

submit.addEventListener("click", validação);

function validação(){
    if(nome.value == ""){
        alert("O campo nome não pode estar vazio");
        nome.focus();
    }else
    if(email.value == ""){
        alert("O campo de email não pode estar vazio");
        email.focus();

    }else
    if(texto.value == ""){
        alert("O campo do feedback não pode estar vazio");
        texto.focus();
    }else
        alert("Feedback enviado com sucesso!!!");
}
