export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { message } = req.body;

  res.status(200).json({
    reply: `Recebi: ${message} 🤖`
  });
}
