const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
  try {
    res.json(about);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  // Not implemented
  res.status(501).send();
});

const about = {
  "name": "John Hrabar",
  "cwid": "10409311",
  "biography": "Hello, I'm John Hrabar. I was born in Toms River, NJ on April 30th, 1997. I'm currently a Computer Science major in my Junior year at Stevens Institute of Technology. \nAlthough the TV show \"The Jersey Shore\" makes Toms River and Seaside Heights look horrible, they are actually very nice places, and I wouldn't be who I am today without them. I frequently attend Stevens' Computer and Console Gaming Society, and am a high ranking Super Smash Brothers player there. ",
  "favoriteShows": ["The Wire", "Breaking Bad", "Steins;Gate", "Game of Thrones", "Spongebob", "Jackie Chan Adventures"],
  "hobbies": ["Lifting", "BJJ", "Video Games", "Guitar", "Cooking"]
}

module.exports = router;