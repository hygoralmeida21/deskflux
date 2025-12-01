export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { mensagem } = req.body;

  if (!mensagem) {
    return res.status(400).json({ error: "Mensagem vazia" });
  }

  try {
    const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: mensagem }]
      })
    });

    const dados = await resposta.json();

    res.status(200).json({
      resposta: dados.choices[0].message.content
    });

  } catch (erro) {
    res.status(500).json({ error: "Erro na IA" });
  }
}
