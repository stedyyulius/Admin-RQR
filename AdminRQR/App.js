import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './src/store'

import Admin from './src'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      selectedTab: 'order'
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Admin />
      </Provider>
    );
  }
}
