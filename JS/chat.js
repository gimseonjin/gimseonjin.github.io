function getMessageAndClear() {
  const chatInput = document.querySelector(".chat_body .chat_write input");
  const currentValue = chatInput.value;
  chatInput.value = "";
  return currentValue;
}

function abuseFilter(msg, abuseList) {
  let filteredMsg = msg;

  for (const abuse of abuseList) {
    const regex = new RegExp(abuse, "gi");
    filteredMsg = filteredMsg.replaceAll(regex, "*".repeat(abuse.length));
  }

  return filteredMsg;
}

function makeMsgBox(msg) {
  // 메시지 버블 만들기
  const message_bubble = document.createElement("div");
  message_bubble.classList.add("message_bubble");
  message_bubble.innerText = msg;

  // 타임스탬프 만들기
  const span = document.createElement("span");
  span.classList.add("message_timestamp");

  // 메시지 block 만들기
  const message_content = document.createElement("div");
  message_content.appendChild(span);
  message_content.appendChild(message_bubble);

  // 메시지 list item 만들기
  const sent_message = document.createElement("li");
  sent_message.appendChild(message_content);
  sent_message.classList.add("sent-message");

  return sent_message;
}

function addMsgBox(msgBox) {
  const chatMessage = document.querySelector(".chat .chat_message");
  chatMessage.appendChild(msgBox);
}

function handleSubmit() {
  event.preventDefault()

  // 메시지 가져오고, 초기화 시키기
  const msg = getMessageAndClear();

  // 욕설 필터링
  const filteredMsg = abuseFilter(msg, ["바보", "멍청이", "나쁜 자식"]);

  // 메시지 박스 만들기
  const msgBox = makeMsgBox(filteredMsg);

  // 메시지 박스 html 붙이기
  addMsgBox(msgBox);

  document.body.scrollIntoView(false);
}
