const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json(story);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  // Not implemented
  res.status(501).send();
});


const story = {
  "storyTitle": "The Time a Wallet Was Dropped",
  "story": "This story is completely true. The year was 2011, and I had just graduated Intermediate School. It was a nice hot summer day, and I was hanging out with two of my best friends, Joey and Bobby. We were at Bobby's house, and it being summer, we wanted to go swimming. I had a pool, so I suggested we walk to my house for a swim. \"Sure,\" they said, and we headed out. Joey and I walked, while Bobby took his bike.\nBob lived next to a Wawa, so we decided to stop there for some food and drinks before we embarked on our long journey. There were a few cars in the parking lot as usual, with a few people hanging out outside. We finished our business there and headed out. Joey asked to ride the bike on the way back. As he was riding out from the parking lot, someone called to him. \"Hey kid, you dropped your wallet!\"\n\"He rode back, thanking the three grown men who called out for the warning. It was only as he arrived next to them that he realized he didn't bring a wallet with him that day. \"Get off the bike,\" they ordered. \"What's this about?\" Joey asked. \"That's my bike. It was stolen from me last year. I can tell by the stickers on it.\" Bobby told them that he just bought it last month. \"Nope, that's definitely my bike,\" they replied.\nNot looking to get beat up over a bike, we left it and walked back to my house. That bike was never seen by us again. Bobby called his mom, who proceeded to yell at him and ask if he was alright. After confirming that he was, we went swimming, and they left for the day. Bobby got a new bike a week or two later, and everything turned out alright."
};

module.exports = router;