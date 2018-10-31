const Recipes = new Mongo.Collection('recipes');

Meteor.methods({  
  'recipes.fetch'() { return Recipes.find().fetch(); },
  'recipes.insert'(data) { return Recipes.insert(data); }
})

export default Recipes;