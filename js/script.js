const botao= document.getElementById("botao");
const mensagem= document.getElementById("mensagem");

botao.addEventlisterner("click",()=>{
    mensagem.textcontent="obrigado por visitar meu cartao!";
});