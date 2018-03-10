const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipes;
const bodyparser = require('body-parser');


router.get("/:id", async (req, res) => {
  try {
    const recipe = await recipeData.getRecipeById(req.params.id);
    res.json(recipe);
  } catch (e) {
    res.status(404).json({ message: "not found!" });
  }
});

router.get("/", async (req, res) => {
  try {
    const recipeList = await recipeData.getAllRecipes();
    res.json(recipeList);
  } catch (e) {
    // Something went wrong with the server!
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  try {
    recipeBody = req.body;
    let recipe = await recipeData.postRecipe(recipeBody);
    res.json(recipe);
  } catch(e){
    res.status(500).send();
  }
});

router.put("/:id", async (req, res) => {
  try {
    let updatedRecipe = await recipeData.putRecipe(req.params.id, req.body);
    res.json(updatedRecipe);
  } catch(e){
    res.status(400).json(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let updatedRecipe = await recipeData.postRecipe(req.params.id, req.body);
    res.json(updatedRecipe);
  } catch(e){
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
    try {
        await recipeData.removeRecipe(req.params.id);
        res.status(200).json({message : "item deleted"});
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;