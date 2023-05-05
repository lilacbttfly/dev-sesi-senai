/*alert("Hello Bundo")
    console.log("Hello Bundo")*/
    function Botao1(){
        alert("onclick test")
        document.body.style.backgroundColor = "#4200FF"
    }
    function alterarfundo(){
        document.body.style.backgroundColor = "#FF00A8"
    }
    function sasa(){
        var nome=prompt ("Qual é seu nome")
        alert (`Bem vindo ${nome}`)
    }
    function soma(){
        var h1=prompt ("digite um numero")
        var h2=prompt ("digite outro numero")

        h1=number(h1)
        h2=number(h2)

        console.log(typeof h1)
        var soma=h1+h2

        console.log(soma)
    }
    function cadastrarumapessoa(){
        var var1=prompt ("Nome da nova pessoa")
        document.getElementById ("lista").innerHTML+=`<br> &#X1F596 acabei de cadastrar <strong> ${var1} </strong> no sistema` 
    }
    function numbers1(){
        var nr = document.getElementById("numbers").value 
        var dobro = nr * 2
        var metade = nr / 2
        document.getElementById("results").innerHTML += `o dobro do numero ${nr} é igual a ${dobro} e a metade é ${metade} <br>`
    }
    function numbers2(){
        document.getElementById("numbers").innerHTML = " "
        document.getElementById("results").innerHTML = " "
    }