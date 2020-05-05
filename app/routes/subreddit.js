const express = require("express");
const subRetCtlr = require("../controller/subreddit");
const router = express.Router();

router.get("/subreddits/:subreddit", subRetCtlr.getSubreddits);

module.exports = router;