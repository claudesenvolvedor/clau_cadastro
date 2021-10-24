/* Script Desenvolvido por Claudeci Alves Pinheiro */

function validarFormulario(){
    var nomePessoa = document.forms["formCadastro"]["nome"].value;
    var sobrenomePessoa = document.forms["formCadastro"]["sobrenome"].value;
	var emailPessoa = document.forms["formCadastro"]["email"].value;
var cpfPessoa = document.forms["formCadastro"]["cpf"].value;
var numeroPessoa = document.forms["formCadastro"]["numero"].value;


	if (nomePessoa == "") {
        alert("Por favor informe o seu nome!");
        document.forms["formCadastro"]["nome"].focus();
        return false;     
    }
    if (sobrenomePessoa == "") {
        alert("Por favor informe o seu Sobrenome!");
        document.forms["formCadastro"]["sobrenome"].focus();
        return false;     
    }
    if (emailPessoa == "") {
        alert("Por favor informe o seu E-mail!");       
        document.forms["formCadastro"]["email"].focus();
        return false;     
    }
if (cpfPessoa == "") {
        alert("Por favor informe o seu CPF!");       
        document.forms["formCadastro"]["cpf"].focus();
return false;
}
if (numeroPessoa == "") {
        alert("Por favor informe o número da residência!");       
        document.forms["formCadastro"]["numero"].focus();
return false;
}

	else{
        
		alert("Olá, " + nomePessoa + " . Obrigado por sua mensagem em breve retornaremos !");
        return true;
    }
}
