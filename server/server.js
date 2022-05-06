const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth");

require("dotenv").config();
require("./auth/passport");
const app = express();

PORT = process.env.PORT || 5000;
CLIENT_URL = process.env.CLIENT_URL;

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
    origin: CLIENT_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log("server run on port : " + PORT);
});
