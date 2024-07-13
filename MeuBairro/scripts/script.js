function mostrarAnoAtual() {
    let rodape = window.document.getElementsByTagName("footer")[0]
    let paragrafo = rodape.children[0]
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear()
    paragrafo.innerHTML += ` &copy; ${anoAtual}`
}

function abrirModalParaImagens(classeDasImagens) {
  // Get the modal
  let modal = document.getElementsByClassName("modal")[0]

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  let imagemDoModal = document.getElementById("modalImg")
  let legendaDoModal = document.getElementById("legenda")

  // Get all images
  let imgs = document.getElementsByClassName(classeDasImagens)

  // Add onclick event to each image
  for (let img of imgs) {
    img.onclick = function() {
      modal.style.display = "block"
      imagemDoModal.src = this.src
      legendaDoModal.innerHTML = this.alt
    }
  }

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("fecharModal")[0]

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }
}