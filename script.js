function askAI() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat-log");

  chat.innerHTML += "<p><b>You:</b> " + input.value + "</p>";
  chat.innerHTML += "<p><b>AI:</b> This is a demo. Real AI coming soon.</p>";

  input.value = "";
}
