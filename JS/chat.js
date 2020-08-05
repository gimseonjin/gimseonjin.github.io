const chatBody = document.querySelector(".chat_body");
const chatMain = chatBody.querySelector(".chat");
const chatMessage = chatMain.querySelector(".chat_message");
const chatWrite = chatBody.querySelector(".chat_write");
const chatInput = chatWrite.querySelector("input");

function addMessage(text) {
  const sent_message = document.createElement("li");
  const message_content = document.createElement("div");
  const message_bubble = document.createElement("div");
  message_bubble.innerText = text;
  message_bubble.classList.add("message_bubble");
  const span = document.createElement("span");
  span.classList.add("message_timestamp");
  message_content.appendChild(span);
  message_content.appendChild(message_bubble);
  sent_message.appendChild(message_content);
  sent_message.classList.add("sent-message");
  chatMessage.appendChild(sent_message);
  document.body.scrollIntoView(false);
}

function handleSubmit() {
  event.preventDefault();
  const currentValue = chatInput.value;
  chatInput.value = "";
  addMessage(currentValue);
}

function init() {
  chatBody.addEventListener("submit", handleSubmit);
  console.log("test");
}

init();
