var Txt=document.getElementById("txt")
var btn=document.getElementById("btn")
function mostrar(){
    var nome=prompt("digite seu nome: ")
    var idade=prompt("digite sua idade: ")
    var cidade=prompt("digite sua cidade: ")
    Txt.textContent="nome:  "+nome+  " idade:  "+idade+" cidade:  "+cidade
}
btn.addEventListener("click",mostrar)