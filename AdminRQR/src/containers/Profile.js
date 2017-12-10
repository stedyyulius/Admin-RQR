import React , { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native'

class Profile extends Component{

  static navigationOptions = ({ navigation }) => ({
    header:null
  })

  render(){
    return(
      <View style={{flex:1}}>
        <Image source={{uri:'https://i.imgur.com/nnBG1s7.png'}} style={styles.profile}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profile:{
    flex: 0.91,
    width: null,
    height: null
  }
})

const mapStateToProps = (state) =>{
  return{

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
