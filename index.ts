import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.get("/home", (req, res) => {
  const token = req.cookies["auth_token"];

  res.send(`
<html>
  <body>
    <h1>Test App</h1>
    <div>Cookie <code>auth_token</code> is: <code>${token}</code></div>
    <div>User is <strong data-test="auth-status">${
      token ? "logged in" : "logged out"
    }</strong></div>
  </body>
</html>`);
});

app.post("/login", (req, res) => {
  res.cookie("auth_token", "some_token");
  res.send("logged in");
});

app.post("/logout", (req, res) => {
  res.clearCookie("auth_token");
  res.send("logged out");
});

app.listen(3000);
