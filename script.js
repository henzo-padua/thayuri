// Botão de surpresa
document.getElementById("surpriseBtn").addEventListener("click", () => {
  document.getElementById("surpriseMessage").classList.remove("hidden");
});

// Corações (mantém o código existente de animação do canvas)

// 🖼️ Carrossel de fotos
const imagens = ["images/foto1.jpg", "images/foto2.jpg", "images/foto3.jpg"];
let index = 0;

function showImage() {
  document.getElementById("carousel-image").src = imagens[index];
}

function nextImage() {
  index = (index + 1) % imagens.length;
  showImage();
}

function previousImage() {
  index = (index - 1 + imagens.length) % imagens.length;
  showImage();
}

// 💌 Gerador de poema (simulação com frases pré-definidas)
const poemas = [
  "Em cada batida do meu coração, existe um pedaço do teu amor.",
  "Você é meu sol mesmo nos dias nublados.",
  "Com você, todos os dias são poesia.",
  "Nos teus olhos encontro meu lar.",
  "Te amar é a mais doce aventura que já vivi.",
];

document.getElementById("generatePoem").addEventListener("click", () => {
  const random = Math.floor(Math.random() * poemas.length);
  document.getElementById("poem").textContent = poemas[random];
});
