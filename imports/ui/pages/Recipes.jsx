import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import recipeActionCreators from '../actions/recipe-actions'

import RecipeForm from '../components/RecipeForm'
import RecipesList from '../components/RecipesList';

const Recipes = ({ data }) => (
  <div>
    <RecipeForm />
    <RecipesList />
  </div>
)

export default Recipes
