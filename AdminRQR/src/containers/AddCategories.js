import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'

class AddCategories extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return(

    )
  }
}

const mapStateToProps = (state) =>{
  return{

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

const styles = StyleSheet.create({
  
})

export default connect(mapStateToProps,mapDispatchToProps)(AddCategories)
