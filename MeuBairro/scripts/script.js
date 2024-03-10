function mostrarAnoAtual() {
    let rodape = window.document.getElementsByTagName("footer")[0]
    let paragrafo = rodape.children[0]
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear()
    paragrafo.innerHTML += ` &copy; ${anoAtual}`
}