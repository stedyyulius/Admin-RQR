import React, { Component } from 'react';
import { connect } from 'react-redux'
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Order from './containers/Order'
import Table from './containers/Table'
import Menu from './containers/Menu'
import Profile from './containers/Profile'
import Report from './containers/Report'

const deviceW = Dimensions.get('window').width
const basePx = 375
function px2dp(px) {
  return px *  deviceW / basePx
}

const Navigator = StackNavigator({
  Order : { screen: Order },
  Table : { screen: Table }
});

const ReportNavigator = StackNavigator({
  Report: { screen: Report }
})

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      selectedTab: 'order'
    }
  }


  render() {
    return (
        <TabNavigator
          tabBarStyle={{ height: this.props.tab, overflow: 'hidden' }}
          sceneStyle={{ paddingBottom: 0 }}
          hideTabTouch={true}
          >
          <TabNavigator.Item
            selected={this.state.selectedTab === 'order'}
            title="Order"
            renderIcon={() => <Icon name="list-alt" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="list-alt" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({ selectedTab: 'order' })}>
            <Navigator />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'menu'}
            title="Menu"
            renderIcon={() => <Icon name="cutlery" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="cutlery" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({ selectedTab: 'menu' })}>
            <Menu />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'report'}
            title="Report"
            renderIcon={() => <Icon name="area-chart" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="area-chart" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({ selectedTab: 'report' })}>
            <ReportNavigator />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="user" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            <Profile />
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}

const mapStatetoProps = (state) =>{
  return{
    tab: state.tab
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect (mapStatetoProps,mapDispatchToProps)(App)
