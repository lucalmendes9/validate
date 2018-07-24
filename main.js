var nome = document.querySelector("#nome");
var sobrenome = document.querySelector("#sobrenome");
var email = document.querySelector("#email");
var senha = document.querySelector("#pass");
var btn = document.querySelector("#btn-form");


function getshow(){

    if((nome.value == "") || (sobrenome.value == "") || (email.value == "") ){
        alert(`Preencha todos os campos`);
    }
    else if(senha.value.length < 6) {
        alert(`Senha deve conter pelo menos 6 caracters`);
    } 
    else if((email.value != "") && (email.value.indexOf("@")  != -1)){
        if(email.value.indexOf(".") > email.value.indexOf("@")){
            alert(`     Nome:   ${nome.value} 
                    Sobrenome:  ${sobrenome.value}
                    Email: ${email.value}
            `);
        }
        else{
            alert(`Digite um email valido`);
        }
        
    }
    else {
        alert(`Digite um email valido`);
    }
}

btn.addEventListener("click", getshow);