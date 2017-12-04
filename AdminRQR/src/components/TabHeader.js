import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity
} from 'react-native'

import { setPage } from '../actions'

class TabHeader extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  styles(){
    return(
      StyleSheet.create({
      tabContainer:{
        flexDirection: 'row',
        alignSelf: 'stretch',
        backgroundColor: 'white'
      },
      tabButton:{
        width: Dimensions.get('window').width / this.props.tabs.length,
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        height: 40,
        justifyContent: 'center'
      },
      tabButtonChoosen:{
        borderBottomColor: 'blue',
        borderBottomWidth: 3,
        width: Dimensions.get('window').width / this.props.tabs.length,
        alignItems: 'center',
        height: 40,
        justifyContent: 'center'
      },
      tabTextChoosen:{
        color: 'blue',
        fontWeight: '400',
        fontSize: 18,
      },
      tabText:{
        fontWeight: '400',
        fontSize: 18,
        color: '#4a4a4a'
      },
      seperator:{
        height: 8
      },
    })
  )
}

  render(){
    return(
      <View>
        <View style={this.styles().tabContainer}>
          {(this.props.tabs.map((t,i)=>
            (this.props.page === i)
            ? <TouchableOpacity style={this.styles().tabButtonChoosen} key={i}>
                <Text style={this.styles().tabTextChoosen}>
                  {t}
                </Text>
              </TouchableOpacity>
            : <TouchableOpacity style={this.styles().tabButton} key={i} onPress={()=> this.props.setPage(i)}>
                <Text style={this.styles().tabText}>
                  {t}
                </Text>
              </TouchableOpacity>
          ))}
        </View>
        <View style={this.styles().seperator}></View>
      </View>
    )
  }
}


const mapStatetoProps = (state) =>{
  return{
    page: state.page
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    setPage: (page) => dispatch(setPage(page))
  }
}

export default connect (mapStatetoProps,mapDispatchToProps)(TabHeader)
