import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native'


class Profile extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <View>
        <Text>
          ini PROFILE
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

export default connect (mapStatetoProps,mapDispatchToProps)(Profile)
