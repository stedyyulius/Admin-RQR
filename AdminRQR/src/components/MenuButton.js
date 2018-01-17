import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native'

class MenuButton extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Food
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Drinks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
          +Add More
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  button:{
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    padding: 10
  },
  buttonText:{
    color: 'white'
  }
})

const mapStatetoProps = (state) =>{
  return{

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect(mapStatetoProps,mapDispatchToProps)(MenuButton)
