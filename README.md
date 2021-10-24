#Formulário de Cadastro

Desafio Individual - Trilha Preparatória Gama Academy 5ª edição Outubro/2021

#Autor

Claudeci Alves Pinheiro

#Contato do Autor

claudesenvolvedor@gmail.com

#Perfil no Linkedin

https://www.linkedin.com/in/claudeci-alves-pinheiro-355a8a21b/

#Perfil no GitHub

https://github.com/claudesenvolvedor

#Repositório do Projeto no GitHub

https://github.com/claudesenvolvedor/clau_cadastro

#Site onde está hospedado o Formulário de Cadastro onde pode ser consultado on line

https://portalwebtec.com.br/meu_formulario/cadastro.html

#Certificado W3C

O código html foi testado e aprovado sem nenhuma restrição pelo site https://validator.w3.org/

#Objetivo

Criar um formulário de cadastro pessoal em Html utilizando recursos de JavaScript e Css

#Funcionalidades do Formulário de Cadastro

Por ser uma página destinada ao cadastro pessoal e que é indispensável a inserção de dados os ítens de cunho de identificação e localização do usuário são obrigatórios

Obrigatórios: Dados Pessoais: Nome/ Sobrenome/ E-mail/ CPF/ RG/ Telefone Celular/ Cep/ Rua/ Número da residência/ Cidade/ Estado 

#Acessibilidade

Pensando nos deficientes visuais  que usam o recurso de acessibilidade (leitor de tela) para computadores/ notebooks/ celulares/ Tablets os campos para inserção de dados tem uma nomeclatura fazendo referência a que tipo de dado precisa ser inserido

Os botões para  Consultar CPF e para Enviar o Cadastro possuem rótulo para orientar o deficiente visual para que serve tal botão

A navegação com a tecla tab ao entrar em um campo de inserção de texto retorna para o usuário o que deve ser preenchido

Ao entrar em um campo de seleção é possível escolher emtre as opções somente com o uso das setas de navegação do teclado para cima e para baixo

Nas caixas seletivas é possível marcar e desmarcar as opções com a barra de espaço

é possível acessar as caixas seletivas com a letra x estando fora de um campo de texto

Caso o deficiente visual esqueça de preencher algum campo obrigatório, automaticamente entra em ação um alerta em JavaScript avisando qual campo precisa de uma atenção do usuário, caso contrário o formulário não pode ser concluído e enviado

Na imagem do logo do Perfil do Linkedin existe uma descrição para que o usuário tenha noção básica da imagem

#Html

Atributo Focus para que ao o usuário entrar na página de Formulário de Cadastro o campo nome seja focado como padrão

Label Rotuladas para cada ítem do cadastro

Campos para inserção de texto (input) com identificação de nome/ id/ item obrigatório (requered) e descrição de campo )placeholder)

Link localizado no Head da página para o style.css que estiliza o Formulário de Cadastro

Links no Head da página para a importação da biblioteca que faz a máscara do campo telefone

link no Body que chama as funções em JavaScript ao clicar nos botões para validar o CPF e Enviar o Cadastro

Link no Body que chama a  função javascript para consultar o cep 

#JavaScript

Função que valida ou invalida o CPF e mostra na tela um alerta se o usuário pode continuar o cadastro

Função que cria a máscara para o campo CPF

Função que ao pressionar as teclas o autocompletar do campo CPF deixa os números no formato xxx.xxx.xxx-xx

Função que obriga o usuário a preencher os campos obrigatórios e mostra na tela um alerta qual campo deve ser preenchido e se tudo foi preenchido retorna um alerta com uma mensagem de conclusão e envio do formulário

Função que consulta o cep e retorna automaticamente preenchendo os campos rua/ Cidade/ Estado

#Css

A estilização de uma página usando recursos do CSS desenvolvida por um deficiente visual não é tarefa fácil, mas com a orientação de uma pessoa que enxergue dando a descrição de cores usadas, tamanhos de fontes, posicionamentos na tela pode ser feita normalmente

Basicamente neste arquivo style.css tem o alinhamento do body, a importação da fonte usada no Formulário de Cadastro, a definição de cores de fundo, tamanho de fontes, cores dos campos imputs, select, botões de rádio, caixa seleetivas e campo de inserção de texto,dos campos de identificação de label, alinhamento do formulário e rodapé

#Referência principal

Curso de Treinamento Gama Academy

#Referências de Sites para pesquisa e estudo

https://www.w3schools.com/js/js_statements.asp
https://www.homehost.com.br/blog/tutoriais/formulario-html/
https://blog.betrybe.com/javascript/javascript-alert/
https://www.devmedia.com.br/criando-form-de-contato-com-html5-css3-e-javascript/29415

#Referências do Youtube

https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n
https://www.youtube.com/watch?v=Zx9UsvAt8pY
https://www.youtube.com/watch?v=2RKg5XIQCHQ&t=7s

#Referências do GitHub

https://gist.github.com/marcoscastro/7887900ceebe9e223dce
https://github.com/DanielObara/MentoriaGitHub
https://github.com/douglash93/consulta-cep

#Agradecimentos

A DEUS , pois, tudo acontece de acordo com sua vontade!

A meus familiares que sempre "emprestam os olhos" pra darem aquela forcinha em algo de suma importância quando a acessibilidade não dá suporte.

A minha namorada Lucimara que apresentou-me a inscrição.

Ao Banco Itaú/Unibanco por proporcionar gratuitamente este Curso rápido.

A Gama Academy pelos conteúdos apresentados na trilha preparatória de alta qualidade

A Karina Aguiar da Gama Academy pelo suporte eficiente e mediação das mentorias, pela paciência com todos.

A Raquel Barradas pelo workshop sobre dicas para o dia da apresentação e entrevista

Aos professores da Gama Academy: Izidro/ JC pelos tutoriais em áudio e vídeo/ e especialmente ao professor Ricardo Alexandre pelas mentorias

Manaus, 24 de Outubro de 2021.