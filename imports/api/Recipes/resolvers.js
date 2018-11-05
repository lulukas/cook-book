import Recipes from './recipes'

export default {
  Query: {
    recipes() {
      return Recipes.find({}).fetch()
    },
  },

  Mutation: {
    createRecipe(obj, { name }, context) {
      console.log(`${name} has been added`)
      const recipeId = Recipes.insert({ name })
      return Recipes.findOne(recipeId)
    },
  },
}
