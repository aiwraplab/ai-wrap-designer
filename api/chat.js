export default async function handler(req, res) {
  const apiKey = process.env.OPENAI_API_KEY;
  const userMessage = req.body.message;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are Wrap Assistant, a helpful design expert for sled wraps. Be professional, friendly, and guide users through choosing models, styles, uploading logos, and explaining that design is free until checkout.",
        },
        { role: "user", content: userMessage },
      ],
    }),
  });

  const data = await response.json();
  res.status(200).json({ reply: data.choices[0].message.content });
}
