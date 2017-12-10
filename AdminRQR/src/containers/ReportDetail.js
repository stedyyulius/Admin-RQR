import React , { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native'

import Navbar from '../components/Navbar'

class ReportDetail extends Component{
  static navigationOptions = ({ navigation }) => ({
    header:null
  })
  render(){
    return(
      <View style={{flex:1}}>
        <Navbar />
        <Image source={{uri:'https://i.imgur.com/tKmxkKa.png'}} style={styles.report}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  report:{
    width: null,
    height: null,
    flex: 0.91,
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

export default connect(mapStateToProps,mapDispatchToProps)(ReportDetail)
