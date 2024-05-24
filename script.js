function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Por condicional
  // pegar a tag imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // se tiver light mode adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Za Warudo")
  } else {
    // sem light mode manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Dio")
  }
  // substituir a imagem
}
