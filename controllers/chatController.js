// backend/controllers/chatController.js

const fetch = require('node-fetch');

const chatWithBot = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
          { role: "system", content: "You are RAHI Bot, a helpful assistant for rural youth career guidance." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Sorry, I didn't understand.";
    res.json({ reply });

  } catch (err) {
    console.error("Error contacting OpenRouter:", err.message);
    res.status(500).json({ reply: "Error contacting the AI server." });
  }
};

module.exports = { chatWithBot };
