import React, { Component } from 'react'
import { connect } from 'react-redux'
import Icons from 'react-native-vector-icons/FontAwesome'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  TextInput
} from 'react-native'


class Report extends Component{
  constructor(props){
    super(props)
    this.state={
      page: 'overview',
      onSearch: false
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Report`,
    headerTitleStyle: {
      alignSelf: 'center'
    },
  })

  search(){
    this.setState({
      onSearch: true
    })
  }

  render(){
    return(
      <View>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tabButton}>
          <Button
            title="Overview"
            color="black"
            onPress={()=> this.setState({page: 'overview'})}
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
          <Button
            title="Customer"
            color="black"
            onPress={()=> this.setState({page: 'customer'})}
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
          <Button
            title="Order"
            color="black"
            onPress={()=> this.setState({page: 'order'})}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <Icons name="search" size={15} style={styles.searchIcon} />
          <TextInput
            placeholder="Search"
            style={styles.searchText}
            // onFocus={()=> this.setState({onSearch: true})}
            />
          <TouchableOpacity style={styles.hamburgerIcon}>
            <Icons name="navicon" size={15} />
          </TouchableOpacity>
        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabContainer:{
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  tabButton:{
    width: Dimensions.get('window').width / 3,
    borderWidth: 2,
    borderRadius: 0.5,
    borderColor: 'white',
  },
  searchBar:{
    flexDirection: 'row'
  },
  searchIcon:{
    marginRight: 10,
    marginTop: 6,
    marginLeft: 15,
  },
  hamburgerIcon:{
    marginTop: 6,
  },
  searchText:{
    width:Dimensions.get('window').width * 6.5/8
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

export default connect (mapStatetoProps,mapDispatchToProps)(Report)
