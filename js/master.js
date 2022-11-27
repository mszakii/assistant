let sendBtn = document.getElementById("send");

let con = document.getElementById("con");

let chat = document.getElementById("chat");

// post Msg function
function sendMsg(text, type) {
  let clMsgDiv = document.createElement("div");
  if (type == "robot") {
    clMsgDiv.className = "romsg";
  } else {
    clMsgDiv.className = "clmsg";
  }

  let textDiv = document.createElement("div");
  textDiv.className = "text";
  textDiv.innerText = text;

  clMsgDiv.appendChild(textDiv);

  chat.appendChild(clMsgDiv);
}

// Robot AI
function robot(condition) {
  if (condition.toLowerCase().startsWith("search ")) {
    window.open(`https://google.com/search?q=${condition.slice(7)}`);
    return `Searching for ${condition.slice(7)} ...`;
  } else if (
    condition.toLowerCase().startsWith("hello") ||
    condition.toLowerCase().startsWith("hi") ||
    condition.toLowerCase().startsWith("good morning") ||
    condition.toLowerCase().startsWith("good afternoon")
  ) {
    if (localStorage.clname) {
      return `${condition} ${localStorage.clname} how can I help you 😊`;
    } else {
      return `${condition} how can I help you 😊`;
    }
  } else if (
    condition.toLowerCase().startsWith("what is the time") ||
    condition.toLowerCase().startsWith("tell me the time") ||
    condition.toLowerCase().startsWith("the time") ||
    condition.toLowerCase().startsWith("time")
  ) {
    return `The time is ${Date().slice(19, 24)}`;
  } else if (
    condition.toLowerCase().startsWith("what is the da") ||
    condition.toLowerCase().startsWith("tell me the da") ||
    condition.toLowerCase().startsWith("the date") ||
    condition.toLowerCase().startsWith("date")
  ) {
    return `${Date().slice(0, 15)}`;
  } else if (condition.toLowerCase().startsWith("my name is")) {
    localStorage.clname = condition.slice(11);
    return `Nice to meet you ${localStorage.clname} 😊`;
  } else if (condition.toLowerCase().startsWith("what is my name")) {
    if (localStorage.clname) {
      return `Your name is ${localStorage.clname} 😊`;
    } else {
      return "You did not tell me yet? 😅";
    }
  } else if (condition.toLowerCase().startsWith("send")) {
    return `${condition.slice(5)}`;
  } else {
    return "Sorry I can not under stand you 😥";
  }
}

// Post Msg from input Function
function post() {
  if (con.value != "") {
    sendMsg(con.value);
    sendMsg(robot(con.value), "robot");
    con.value = "";
  }
}

sendBtn.onclick = post;

con.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    post();
  }
});
