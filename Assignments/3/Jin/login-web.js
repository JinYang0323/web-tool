const loginWeb = {
  loginPage: function() {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="login.css" />
        <title>login Page</title>
      </head>
      <body>
        <div class="login-frame">
          <div>            
            <p class="account-login">Account Login</p>            
            <div class="login-box">
              <p text-align="left" style="height: 5px;">Username</p>
              <form action="/login" method="POST">
                <input name="username" class="username" />
                <button type="submit">Log in</button>
              </form>
            </div>
          </div>
        </div>
      </body>
    </html>
    `;
  }
};
module.exports = loginWeb;
