const chatDisplay = document.getElementById("chatDisplay");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");

function addMessage(message, type) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", type);
  messageDiv.textContent = message;
  chatDisplay.appendChild(messageDiv);
  chatDisplay.scrollTop = chatDisplay.scrollHeight; 
}

function sendMessage() {
  const message = chatInput.value.trim();
  if (message) {
    addMessage(message, "sent");
    chatInput.value = ""; 
    botReply(message); 
  }
}

function botReply(userMessage) {
  const replies = {
    hello: "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    bye: "Goodbye! Have a nice day!",
  };

  const reply =
    replies[userMessage.toLowerCase()] ||
    "I'm sorry, I didn't understand that.";
  setTimeout(() => addMessage(reply, "received"), 1000); 
}

sendButton.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
