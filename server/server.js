const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth");

require("./auth/passport");
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["sabdahtb"],
    maxAge: 24 * 60 * 60 * 1000, // 24 jam
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen(5000, () => {
  console.log("server run on port : 5000");
});
