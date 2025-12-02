async function sendMessage(){
  const input = document.getElementById("userInput");
  const msg = input.value;

  if(msg === "") return;

  chat.innerHTML += `<p><strong>Você:</strong> ${msg}</p>`;
  input.value = "";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mensagem: msg })
    });

    const data = await response.json();

    chat.innerHTML += `<p><strong>DeskFlux:</strong> ${data.resposta}</p>`;
    chat.scrollTop = chat.scrollHeight;

  } catch (error) {
    chat.innerHTML += `<p><strong>DeskFlux:</strong> Erro ao conectar com a IA.</p>`;
  }
}
