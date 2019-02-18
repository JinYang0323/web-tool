const chatWeb = {
  chatPage: function(chat, username) {
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
              <input type="hidden" name="username" value="${username}">
              <button type="submit">Log out</button>
              </form>
          </div>
          <div id="chat-app">
          ${chatWeb.getUserList(chat)}
            <div class="display-panel">              
              <div class="login-name"></div>
              ${chatWeb.getMessageList(chat)}
              <hr width="95%" />
              ${chatWeb.getOutgoing(username)}
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
            <div class="message-info">
              <span class="timestamp">${message.timestamp}</span>
            </div>  
          <div class="meta-info">              
              <div class="sender-info">
                <img class="avatar" alt="" src="/image.jpg"/>  
                <span class="username">${message.sender}</span>
                <p class="message-text">${message.text}</p>  
              </div>                  
            </div>            
          </div>
        </li>
      `
        )
        .join("") +
      `</ol>`
    );
  },

  getOutgoing: function(username) {
    return `
      <div class="outgoing">
        <form class="send" action="/chat" method="POST">
          <input type="hidden" name="username" value="${username}">
          <input class="to-send" name="text" value="" placeholder="Enter message to send" />
          <button type="submit">Send</button>    
        </form>
        <form class="refresh" action="/" method="GET">
          <input type="hidden" name="username" value="${username}">
          <button type="submit">Refresh</button>
        </form>
      </div>
    `;
  }
};
module.exports = chatWeb;
