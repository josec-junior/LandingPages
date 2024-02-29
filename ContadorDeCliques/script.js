let contador = 0
let i = 30
cliques = document.getElementById("cliques")
tempo = document.getElementById("tempo")

function mudarTema() {
    let corpo = window.document.getElementsByTagName("body")[0]
    let titulo = window.document.getElementsByTagName("h1")[0]
    let divCliques = window.document.getElementById("cliques")
    let divTempo = window.document.getElementById("tempo")
    let button = window.document.getElementsByClassName("btn")[0]
    let rodape = window.document.getElementsByTagName("footer")[0]
    let link1 = rodape.getElementsByClassName("link")[0]
    let link2 = rodape.getElementsByClassName("link")[1]
    if (corpo.style.backgroundColor == "white" || corpo.style.backgroundColor == "") {
        corpo.style.backgroundColor = "rgb(44, 43, 43)"
        corpo.style.fontStyle = "white"
        titulo.style.color = "#be1dd6"
        divCliques.style.color = "white"
        divTempo.style.color = "white"
        button.style.backgroundColor = "#be1dd6"
        rodape.style.color = "white"
        link1.style.color = "#be1dd6"
        link2.style.color = "#be1dd6"
    } else {
        corpo.style.backgroundColor = "white"
        corpo.style.fontStyle = "black"
        titulo.style.color = "#0b0be0"
        divCliques.style.color = "black"
        divTempo.style.color = "black"
        button.style.backgroundColor = "#0b0be0"
        rodape.style.color = "black"
        link1.style.color = "#0b0be0"
        link2.style.color = "#0b0be0"
    }
}

function clicar() {
    if(contador == 0) {
        tempo.innerHTML = "30 Segundos"
        loop = setInterval("contagemRegressiva()", 1000)
    }
    if(i > 0) {
        contador ++
        cliques.innerHTML = `${contador} Cliques`
    }
}

function contagemRegressiva() {
    i--
    if(i <= 0) {
        tempo.innerHTML = `Tempo Esgotado!`
        clearInterval(loop)
        tempo.innerHTML += "<p> <input type = 'button' value = 'Recomeçar' onclick = 'recomecar()' id = 'recomecar'> </p>"
    } else {
        tempo.innerHTML = `${i} Segundos`
    }
}

function recomecar() {
    contador = 0
    i = 30
    loop = setInterval("ContagemRegressiva()", 1000)
    cliques.innerHTML = "Clique no botão para começar."
    tempo.innerHTML = "30 Segundos"
}