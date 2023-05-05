function calcular(){
    var nr1=document.getElementById ("numero1").value
    var nr2=document.getElementById ("numero2").value

    nr1 = Number(nr1)
    nr2 = Number(nr2)

    var adicao = nr1 + nr2
    var subtracao = nr1 - nr2
    var multiplicacao = nr1 * nr2
    var divisao = nr1 / nr2
    var exponenciacao = nr1 ** nr2
    var resto = nr1 % nr2
    document.getElementById("resultados").innerHTML += `${nr1} + ${nr2} = ${adicao} <br>
    ${nr1} - ${nr2} = ${subtracao} <br>
    ${nr1} * ${nr2} = ${multiplicacao} <br>
    ${nr1} / ${nr2} = ${divisao} <br>
    ${nr1} ** ${nr2} = ${exponenciacao} <br>
    ${nr1} % ${nr2} = ${resto}` 
}