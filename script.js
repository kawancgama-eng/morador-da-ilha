let tamanhoSelecionado = "";

// 1. Função de Compra via WhatsApp
function comprar(produto) {
  const numero = "5598986097805";
  
  // Verifica se o usuário escolheu o tamanho antes de comprar
  if (tamanhoSelecionado === "") {
    alert("Por favor, selecione um tamanho antes de finalizar a compra.");
    return;
  }

  const mensagem = `Olá! Tenho interesse na ${produto} no tamanho ${tamanhoSelecionado}. Poderia me passar mais informações?`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  
  window.open(url, "_blank");
}

// 2. Animação de Scroll (Aparecer suavemente)
const elementos = document.querySelectorAll('.aparecer');

function mostrarNaTela() {
  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    if (posicao < window.innerHeight - 50) {
      el.classList.add('ativo');
    }
  });
}

// Escuta o scroll e o carregamento da página
window.addEventListener('scroll', mostrarNaTela);
window.addEventListener('load', mostrarNaTela);

// 3. Seleção de Tamanhos (Lógica de Cliques)
const botoesTamanho = document.querySelectorAll('.btn-tamanho');

botoesTamanho.forEach(botao => {
  botao.addEventListener('click', () => {
    // Remove a cor de todos os botões primeiro
    botoesTamanho.forEach(b => {
      b.style.backgroundColor = "white";
      b.style.color = "black";
      b.style.borderColor = "#d2d2d7";
    });

    // Aplica a cor de "selecionado" no botão clicado
    botao.style.backgroundColor = "black";
    botao.style.color = "white";
    botao.style.borderColor = "black";
    
    // Salva o tamanho na variável para enviar ao WhatsApp
    tamanhoSelecionado = botao.innerText;
  });
});