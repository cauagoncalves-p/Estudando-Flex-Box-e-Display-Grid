// Criando uma função
function Adiconarcaracter(caracter){
    // Procurando no documento HTML um class com o nome display e pegando apenas o seu valor
    const valorInput = document.querySelector('.display').value
    // Printando no console o valor encontrado
    console.log(valorInput)
    // Adicionando a valor encontrado com mais algum outro caracter encontro/ não estamos somando, apenas adicionando 
    document.querySelector('.display').value = valorInput + caracter
}


function Limpartela(){
    document.querySelector('.display').value = ""
}

function Calcular(){
    const valorInput = document.querySelector('.display').value
    // Transforma a string e tenta fazer um calculo 
    document.querySelector('.display').value = eval(valorInput)

}

function Inverte(){
    const valorInput = document.querySelector('.display').value
    document.querySelector('.display').value = valorInput * -1
}