const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json(education);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  // Not implemented
  res.status(501).send();
});

const education = [
    {
      "schoolName": "East Dover Elementary",
      "degree": "Elementary School Degree(?)",
      "favoriteClass": "History (5th Grade)",
      "favoriteMemory": "This isn't much of a story, but in second grade I sat next to my best friend during class. The classroom's desks were pushed together in a three sided square shape, and we sat in one of the teacher's blind spots. Every day we would bring in Pokemon cards and play a very watered down version of the game under our desks."
    },

    {
      "schoolName": "Toms River Intermediate East",
      "degree": "Middle School Degree(?)",
      "favoriteClass": "English (8th Grade)",
      "favoriteMemory": "In eighth grade I had algebra as my final class of the day. The teacher like to keep her room at blisteringly hot temperatures, and I sat in the front row right next to her ancient, barely functioning projector. Its fan would blow hot air into my face for 40 minutes a day, and almost every day I would fall asleep and slam my face into the desk."
    },

    {
      "schoolName": "Toms River High School East",
      "degree": "High School Degree",
      "favoriteClass": "Intro to Computer Science",
      "favoriteMemory": "This story is about one of my least favorite classes I've ever taken. I took an AP English class my junior year, and the teacher was a loose cannon. She would show up to class 10 minutes late every day, out of breath and talking about how she needed to refill her coffee. In just about every AP class I took, nothing would be done after the AP exams. She didn't like that and assigned more work. Not only did we have to read \"The Grapes of Wrath\" during the last few weeks of school, we had to write a musical about it. There were only 5 kids in the class, and she made us write this musical and then perform it after the final exam. It was a pretty terrible class overall, but I wrote some great songs for the musical."
    }

]

module.exports = router;