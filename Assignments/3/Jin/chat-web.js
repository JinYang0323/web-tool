const currentUser = "me";
const chatWeb = {
  chatPage: function(chat) {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="/chat.css"/>
          <title>Chat</title>
        </head>
        <body>
          <div class="logout">
            <form action="/logout" method="POST">
              <button type="submit">Log out</button>
              <input type="hidden" name="user" value=${currentUser}>
            </form>
          </div>
          <div id="chat-app">
          ${chatWeb.getUserList(chat)}
            <div class="display-panel">              
              <div class="login-name"></div>
              ${chatWeb.getMessageList(chat)}
              <hr width="95%" />
              ${chatWeb.getOutgoing(chat)}
            </div>            
          </div>
        </body>
      </html>
  `;
  },

  getUserList: function(chat) {
    return (
      `<ul class="users">` +
      Object.values(chat.users)
        .map(
          user => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `
        )
        .join("") +
      `</ul>`
    );
  },

  getMessageList: function(chat) {
    return (
      `<ol class="messages">` +
      chat.messages
        .map(
          message => `
        <li>
          <div class="message">
            <div class="meta-info">
              <div class="message-info">
                <span class="timestamp">${message.timestamp}</span>
              </div>
              <div class="sender-info">
                <span class="username">${message.sender}</span>
              </div>       
            </div>
            <p class="message-text">${message.text}</p>
          </div>
        </li>
      `
        )
        .join("") +
      `</ol>`
    );
  },

  getOutgoing: function(chat) {
    return `
      <div class="outgoing">
        <form action="/chat" method="POST">
          <input class="to-send" name="text" value="" placeholder="Enter message to send"/>
          <button type="submit">Send</button>
          <input type="hidden" name="sender" value=${currentUser}>
        </form>
        <br />
        <form class="refresh" action="/" method="POST">
          <button type="submit">Refresh</button>
        </form>
      </div>
    `;
  }
};
module.exports = chatWeb;
