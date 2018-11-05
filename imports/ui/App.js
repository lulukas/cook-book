import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import Recipes from './pages/Recipes'

const GET_TITLE = gql`
  query {
    appTitle
  }
`

const App = () => (
  <Query query={GET_TITLE}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>
      if (error) return <div>Error :(</div>

      return (
        <div>
          <h1>{data.appTitle}</h1>
          <Recipes />
        </div>
      )
    }}
  </Query>
)
export default App
