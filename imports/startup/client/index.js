import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import appReducer from '../../ui/reducers'
import App from '../../ui/App'

import client from './apollo'

const store = createStore(appReducer, applyMiddleware(thunk))

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
