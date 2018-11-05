import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import Recipes from './Recipes'

const nameQuery = gql`
  query {
    name
  }
`

const App = () => (
  <Query query={nameQuery}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>
      if (error) return <div>Error :(</div>

      return <Recipes title={data.name}/>
    }}
  </Query>
)
export default App
