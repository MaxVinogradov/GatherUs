import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { AppContainer } from '../Routers'
import { store } from '../configureStore'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
