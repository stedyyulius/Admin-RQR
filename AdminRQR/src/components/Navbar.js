import React , { Component } from 'react'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native'

class ReportDetail extends Component{

  static navigationOptions = ({ navigation }) => ({
    header:null
  })

  render(){
    return(
      <View style={styles.searchBar}>
        <View style={styles.searchColumn}>
          <Icon name="search" size={20} style={styles.searchIcon} color="white" />
          <TextInput
            placeholder="Search Report"
            style={styles.searchText}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            // onFocus={()=> this.setState({onSearch: true})}
            />
        </View>
        <TouchableOpacity style={styles.hamburgerIcon}>
          <Icon name="navicon" size={20} color="white" />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBar:{
    flexDirection: 'row',
    backgroundColor: '#16a187',
    padding: 10,
  },
  searchColumn:{
    flexDirection: 'row',
    backgroundColor: '#1d7d68',
    width: Dimensions.get('window').width * 6.7/8,
    marginRight: 15,
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
    width:Dimensions.get('window').width * 6.5/8,
    color: 'white',
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
