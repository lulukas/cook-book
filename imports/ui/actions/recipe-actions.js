import Recipes from '../../api/Recipes/recipes';

function getRecipes() {  
  return async function(dispatch) {
    const recipes = await Meteor.callPromise('recipes.fetch');

    return dispatch({
      type: 'GET_RECIPES',
      payload: recipes
    });
  }
}

function createRecipe(data) {  
  return async function(dispatch) {
    const { name } = data;
    const recipeId = await Meteor.callPromise('recipes.insert', { name });

    return dispatch({
      type: 'CREATE_RECIPE',
      payload: {
        _id: recipeId,
        name
      }
    })
  }
}

export default {  
  createRecipe,
  getRecipes
}