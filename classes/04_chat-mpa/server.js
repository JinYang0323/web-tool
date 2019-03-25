const express = require("express");
const app = express();
const PORT = 4000;

/**you may also include a dynamic */

app.use(express.static("./public"));

function userListTemplate() {
  return `
  <!-- user info is in the left part of display-panel -->
  <ul class="users">
    <li>
      <div class="user">
        <span class="username">Amit</span>
      </div>
    </li>
    <li>
      <div class="user">
        <span class="username">Bao</span>
      </div>
    </li>
  </ul>
  `;
}
function messageListTemplate(messages) {
  return (
    `<ol class="messages">` +
    messages
      .map(message => {
        return `
    <li>
      <div class="sender-message">
        <div class="meta-info">
          <div class="sender-info">
            <img class="avatar" alt="user-avatar" src="images/avatar-amit.jpg">
            <span class="username">${message.sender}</span>
          </div>
          <div class="message-time">
            <span class="timestamp">${message.timestamp}</span>
          </div>
        </div>
        <p class="message-text">${message.text}</p>
      </div>
    </li>
    `;
      })
      .join("") +
    `</ol>`
  );
}

function outgoingTemplate() {
  return `
  <div class="outgoing">
    <form action="/chat" method="POST">
      <input name="text" class="to-send" value="" placeholder="Enter message to send"/>
      <button type="submit">Send</button>
    </form>
  </div>`;
}

const messages = [
  {
    sender: "Amit",
    text: "You up?",
    timestamp: new Date("2019-01-01 18:20:00")
  },
  {
    sender: "Bob",
    text:
      "Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos",
    timestamp: new Date("2019-01-21 18:20:00")
  }
];

app.post("/chat", express.urlencoded({ extended: false }), (req, res) => {
  messages.push({
    sender: "Me",
    timestamp: new Date(),
    text: req.body.text
  });
  res.redirect("/dynamic.html");
});

/** /dynamic.html*/
app.post("/", (req, res) => {
  alert(req.body.text);
});

/** /*/
app.get("/dynamic.html", (req, res) => {
  res.send(`
    <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="mystyle.css"/>
      <title>Chat</title>
    </head>
    <body>
      <div id="chat-app">
        <div class="display-panel">

          ${userListTemplate()}
          ${messageListTemplate(messages)}
          ${outgoingTemplate()}
        </div>
        <div class="send-message">
          ${outgoingTemplate()}
        </div>
      </div>
    </body>
  </html>
  `);
});
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
