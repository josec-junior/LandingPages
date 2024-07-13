function mostrarAnoAtual() {
    let rodape = window.document.getElementById("rodape")
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear()
    rodape.innerHTML += `&copy; ${anoAtual}`
}

function abrirEmOutraAba(url) {
    let win = window.open(url, "_blank")
    win.focus()
}