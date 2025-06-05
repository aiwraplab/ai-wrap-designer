const chatBox = document.querySelector(".assistant");
const chatLog = document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");

chatLog.className = "chat-log";
input.placeholder = "Ask me anything...";
button.textContent = "Send";

chatBox.appendChild(chatLog);
chatBox.appendChild(input);
chatBox.appendChild(button);

button.onclick = async () => {
  const userMsg = input.value;
  if (!userMsg) return;

  chatLog.innerHTML += `<div><strong>You:</strong> ${userMsg}</div>`;
  input.value = "";

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMsg }),
  });

  const data = await response.json();
  chatLog.innerHTML += `<div><strong>Wrap Assistant:</strong> ${data.reply}</div>`;
};
