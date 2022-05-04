const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GitHubStrategy = require("passport-github2");

const GOOGLE_CLIENT_ID =
  "373404686398-tbdpept4eqle4kfbjv2itc7t2rl2khls.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const FACEBOOK_CLIENT_ID = "1032790357322088";
const FACEBOOK_CLIENT_SECRET = "9555be0433da9448c381c2b435fcf945";

const GITHUB_CLIENT_ID = "8315b2fea344f29e83fc";
const GITHUB_CLIENT_SECRET = "8b438979efc3442748243422b6f1d5b5e903af94";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
