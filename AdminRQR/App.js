import React, { Component } from 'react';
import { Provider } from 'react-redux'
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from 'react-native'
import { StackNavigator } from 'react-navigation'

import store from './src/store'
import Order from './src/containers/Order'
import Table from './src/containers/Table'

const deviceW = Dimensions.get('window').width
const basePx = 375
function px2dp(px) {
  return px *  deviceW / basePx
}

const Navigator = StackNavigator({
  Order : { screen: Order },
  Table : { screen: Table }
});

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
        <TabNavigator
          // tabBarStyle={{ height: 0, overflow: 'hidden' }}
          // sceneStyle={{ paddingBottom: 0 }}
          >
          <TabNavigator.Item
            selected={this.state.selectedTab === 'order'}
            title="Order"
            renderIcon={() => <Icon name="list-alt" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="list-alt" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({ selectedTab: 'order' })}>
            <Navigator />
          </TabNavigator.Item>
        </TabNavigator>
      </Provider>
    );
  }
}
