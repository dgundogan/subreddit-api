const Snoowrap = require("snoowrap");
require("dotenv").config();

const client = new Snoowrap({
  userAgent: "subreddit-api",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS,
});

exports.getSubreddits = (req, res, next) => {
  var subreddit = req.params.subreddit;
  client
    .getSubreddit(subreddit)
    .getTop({ time: "all" })
    .map((post) => {
      return {
        id: post.id,
        url: post.url,
        title: post.title,
        public_description: post.public_description,
        subscribers: post.subscribers,
        author: post.author_fullname,
      };
    })
    .then((topPostUrlAndTitle) => res.json(topPostUrlAndTitle))
    .catch((err) => {
      throw new Error(err);
    });
};