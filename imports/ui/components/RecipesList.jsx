// React
import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_RECIPES = gql`
  query getSimpleRecipes{
    recipes {
      _id
      name
    }
  }
`

const RecipesList = () => (
  <Query query={GET_RECIPES}>
    {({ loading, error, data, refetch }) => {
      if (loading) return <div>Loading...</div>
      if (error) return <div>Error :(</div>

      return (
        <ul>
          {data.recipes ? (
            data.recipes.map(w => <li key={w._id}>{w.name}</li>)
          ) : (
            <li>none</li>
          )}
        </ul>
      )
    }}
  </Query>
)

export default RecipesList
