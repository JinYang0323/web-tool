const chatWeb = {
  pageWrap: function(content) {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="/chat.css"/>
          <title>Chat</title>
        </head>
        <body>
          <div id="chat-app">
            ${content}
          </div>
          <script src="/chat.js"></script>
        </body>
      </html>
    `;
  },

  loginPage: function() {
    return this.pageWrap(`
    <div class="login-frame">       
    <p class="account-login">Account Login</p>            
    <div class="login">
      <p text-align="left" style="height: 5px;">Username</p>
      <form action="/login" method="POST">
        <input name="username" class="username" placeholder="Enter Username"/>
        <button type="submit">Log in</button>
      </form>
    </div>      
</div>
    `);
  },

  chatPage: function(chat, username) {
    return this.pageWrap(`
      ${this.logout(username)}
      <div class="display-panel">
        ${this.getUserList(chat, username)}
        ${this.getMessageList(chat)}
      </div>
      ${this.getOutgoing(username)}
    `);
  },
  logout: function(username) {
    return `
      <div class="logout">
        <form action="/logout" method="POST">
          <input type="hidden" name="username" value="${username}"/>
          <button type="submit">Logout</button>
        </form>
      </div>
    `;
  },

  formatUser: function(user) {
    return `
      <li>
        <div class="user">
          <span name="username" class="username">${user}</span>
        </div>
      </li>
    `;
  },
  getUserList: function(chat, username) {
    return `
      <ul id="users" class="users">
        ${Object.values(chat.users)
          .map(this.formatUser)
          .join('')}
        <form class="unselectAll" action="/" method="GET">
          <input type="hidden" name="username" value="${username}"/>  
          <button type="submit">Unselect All</button>
        </form>
        </ul>
    `;
  },

  formatMessage: function(message) {
    return `
      <li>
        <div id="message" class="message">
          <div class="meta-info">
            <div class="sender-info">
              <span class="username">${message.sender}</span>
            </div>
            <div class="message-info">
              <span class="timestamp">${message.timestamp}</span>
            </div>
          </div>
          <p class="message-text">${message.text}</p>
        </div>
      </li>
    `;
  },
  getMessageList: function(chat) {
    return `
      <ol id="messages" class="messages">
      ${chat.messages.map(this.formatMessage).join('')}
      </ol>
    `;
  },

  getOutgoing: function(username) {
    return `
      <div class="outgoing">
        <form class="send" action="/chat" method="POST">
          <input type="hidden" name="username" value="${username}"/>
          <input class="to-send" name="text" value="" placeholder="Enter message to send"/>
          <button type="submit">Send</button>
        </form>
        <form class="refresh" action="/" method="GET">
          <input type="hidden" name="username" value="${username}"/>
          <button type="submit">Refresh</button>
        </form>
      </div>
    `;
  }
};
module.exports = chatWeb;
