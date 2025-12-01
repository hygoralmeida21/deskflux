const chat = document.getElementById("chat");

function sendMessage(){
  const input = document.getElementById("userInput");
  const msg = input.value;

  if(msg === "") return;

  chat.innerHTML += `<p><strong>Você:</strong> ${msg}</p>`;

  setTimeout(() => {
    chat.innerHTML += `<p><strong>DeskFlux:</strong> Entendi 😊 Em breve terei respostas inteligentes completas!</p>`;
    chat.scrollTop = chat.scrollHeight;
  }, 800);

  input.value = "";
}

function createImage(){
  chat.innerHTML += `<p><strong>DeskFlux:</strong> 🎨 Função de geração de imagens ativada (em breve conectada a IA real!)</p>`;
}
