
var nome = $("#nome")
var email = $("#email")
var texto = $("#texto")

// submit.addEventListener("click", validação);
$("#submit").click(validação);

function validação(){
    if(nome.val() == ""){
        alert("O campo nome não pode estar vazio");
        nome.focus();
    }else
    if(email.val() == ""){
        alert("O campo de email não pode estar vazio");
        email.focus();

    }else
    if(texto.val() == ""){
        alert("O campo do feedback não pode estar vazio");
        texto.focus();
    }else
        alert("Feedback enviado com sucesso!!!");
}
