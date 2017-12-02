import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native'


class Menu extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <View>
        <Text>
          ini menu
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

const mapStatetoProps = (state) =>{
  return{

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect (mapStatetoProps,mapDispatchToProps)(Menu)
