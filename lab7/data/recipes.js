const mongoCollections = require("../config/mongoCollections");
const lab7recipes = mongoCollections.lab7recipes;
const uuid = require("uuid/v4");


async function getAllRecipes() {
  try {
    const recipes = await lab7recipes();
    let arrayRecipes = await recipes.find({}).toArray();
    let finalArray = [];
    for(let i = 0; i < arrayRecipes.length; i++){
      finalArray.push({_id: arrayRecipes[i]._id, title: arrayRecipes[i].title});
    }
    return finalArray;
  }catch(error) {
    console.log(error.message);
  }
}

async function getRecipeByID(id) {
  try {
    if(typeof id !== 'string'){
      throw Error("id is invalid");
    }
    let recipes = await lab7recipes();
    let recipe = await recipes.findOne({_id: id});
    return recipe;
  }
  catch(error){
    console.log(error.message);
  }
}

async function postRecipe(newRecipe){
  try {
    if(!newRecipe.title || typeof newRecipe.title !== "string"){
      throw Error("Title is not valid");
    }
    if(!newRecipe.ingredients || Array.isArray(newRecipe.ingredients) == false){
      throw Error("Ingredients are not valid");
    }
    if(!newRecipe.steps || Array.isArray(newRecipe.steps) == false){
      throw Error("Steps are not valid");
    }
    newRecipe.ingredients.forEach((ingredient) => {
      if(!ingredient.name || typeof ingredient.name !== "string"){
        throw Error("Each ingredient must have a name");
      }
      if(!ingredient.amount || typeof ingredient.amount !== "string"){
        throw Error("Each ingredient must have an amount");
      }
    })
    newRecipe.steps.forEach((step) => {
      if(!step || typeof step !== "string"){
        throw Error(`Step ${step} is not valid`);
      }
    })
    let object ={
      _id: uuid(),
      title: newRecipe.title,
      ingredients: newRecipe.ingredients,
      steps: newRecipe.steps
    }
    let recipes = await lab7recipes();
    await recipes.insertOne(object);
    return await recipes.findOne({_id: object._id});
  } catch(error){
    console.log(error.message);
  }

}

async function putRecipe(id, updatedRecipe){
  try {
    if(!updatedRecipe.title || typeof updatedRecipe.title !== "string"){
      throw Error("Title is not valid");
    }
    if(!updatedRecipe.ingredients || Array.isArray(updatedRecipe.ingredients) == false){
      throw Error("Ingredients are not valid");
    }
    if(!updatedRecipe.steps || Array.isArray(updatedRecipe.steps) == false){
      throw Error("Steps are not valid");
    }
    if(updatedRecipe.hasOwnProperty("_id") == true){
      throw Error("New Recipe should not have an id");
    }

    updatedRecipe.ingredients.forEach((ingredient) => {
      if(!ingredient.name || typeof ingredient.name !== "string"){
        throw Error("Each ingredient must have a name");
      }
      if(!ingredient.amount || typeof ingredient.amount !== "string"){
        throw Error("Each ingredient must have an amount");
      }
    })
    updatedRecipe.steps.forEach((step) => {
      if(!step || typeof step !== "string"){
        throw Error(`Step ${step} is not valid`);
      }
    })

    if(typeof id !== 'string'){
      throw Error("id is invalid");
    }
    let recipes = await lab7recipes();

    updatedRecipe["_id"] = id;
    const update = await recipes.replaceOne({_id: id}, updatedRecipe, true);
    return await recipes.findOne({_id: id});
  } catch(error) {
    console.log(error.message);
  }
}

async function patchRecipe(id, updatedRecipe){
  try {
    let toUpdate = {};
    if(updatedRecipe.title){
      if(typeof updatedRecipe.title !== "string"){
        console.log(updateRecipe.title);
        throw Error("Title is not valid");
    }
    toUpdate.title = updatedRecipe.title;
  }
    if(updatedRecipe.ingredients){ 
      if(Array.isArray(updatedRecipe.ingredients) == false){
        throw Error("Ingredients are not valid");
    }
    updatedRecipe.ingredients.forEach((ingredient) => {
      if(!ingredient.name || typeof ingredient.name !== "string"){
        throw Error("Each ingredient must have a name");
      }
      if(!ingredient.amount || typeof ingredient.amount !== "string"){
        throw Error("Each ingredient must have an amount");
      }
    })
    toUpdate.ingredients = updatedRecipe.ingredients;
  }
    if(updatedRecipe.steps){
       if(Array.isArray(updatedRecipe.steps) == false){
        throw Error("Steps are not valid");
    }
    updatedRecipe.steps.forEach((step) => {
      if(!step || typeof step !== "string"){
        throw Error(`Step ${step} is not valid`);
      }
    })
    toUpdate.steps = updatedRecipe.steps;

  }
    if(typeof id !== 'string'){
      throw Error("id is invalid");
    }
    let recipes = await lab7recipes();

    const update = await recipes.findOneAndUpdate({_id: id}, { $set: toUpdate});
    return await recipes.findOne({_id: id});
  } catch(error) {
    console.log(error.message);
  }
}

async function removeRecipe(id){
  try {
    if(typeof id !== 'string'){
      throw Error("id is not valid");
    }

    let recipes = await lab7recipes();
    await recipes.deleteOne({_id: id});
  } catch(error){
    console.log(error.message);
  }
}

module.exports = {
  removeRecipe,
  patchRecipe,
  putRecipe,
  postRecipe,
  getAllRecipes,
  getRecipeByID
}