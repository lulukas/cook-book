import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'

import client from './apollo'
import store from './store'

import App from '../../ui/App'


Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>,
    document.getElementById('app')
  )
})
