// React
import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const ADD_RECIPE = gql`
  mutation AddRecipe($name: String!) {
    createRecipe(name: $name) {
      _id
    }
  }
`

const RecipeForm = () => {
  let name

  return (
    <Mutation mutation={ADD_RECIPE}>
      {(createRecipe, { data }) => (
        <form
          onSubmit={e => {
            e.preventDefault()
            createRecipe({ variables: { name: name.value }, refetchQueries:['getSimpleRecipes']} )
              .catch(error => console.log(error))
            name.value = ''
          }}
        >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" ref={input => (name = input)} />
          <input type="submit" value="Add Recipe" />
        </form>
      )}
    </Mutation>
  )
}

export default RecipeForm
