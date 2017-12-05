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

import TabHeader from '../components/TabHeader'
import Customer from '../components/Customer'

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
    header:(
      <View style={styles.searchBar}>
        <View style={styles.searchColumn}>
          <Icons name="search" size={20} style={styles.searchIcon} color="white" />
          <TextInput
            placeholder="Search Report"
            style={styles.searchText}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            // onFocus={()=> this.setState({onSearch: true})}
            />
        </View>
        <TouchableOpacity style={styles.hamburgerIcon}>
          <Icons name="navicon" size={20} color="white" />
        </TouchableOpacity>
      </View>
    )
  })

  search(){
    this.setState({
      onSearch: true
    })
  }

  render(){
    return(
      <ScrollView>
        <TabHeader tabs={["Customer","Menu"]} />
        <Customer name="Felix Cahyadi Tio" photo="https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/12096566_10153589536696427_3240500719548235275_n.jpg?oh=5772d7971a9bc39de1bf7a789cebff84&oe=5AA6AFB2" />
        <Customer name="Stedy Yulius" photo="https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/995330_1009814712422752_5652905225413807790_n.jpg?oh=1b79fdc3c77bc739aa9f27a1c6fa0464&oe=5A97FE1C" />
        <Customer name="Brandon Tan" photo="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" />
        <Customer name="Joko Susilo" photo="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" />
        <Customer name="Kim Ji Sung" photo="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" />
        <Customer name="Adi Wijaya" photo="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" />
        <Customer name="Jake Johnson" photo="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" />
        <Customer name="John Doe" photo="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" />
        <View style={{height:45,backgroundColor:'white'}}></View>
      </ScrollView>
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
    flexDirection: 'row',
    backgroundColor: '#16a187',
    padding: 10
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

const mapStatetoProps = (state) =>{
  return{

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect (mapStatetoProps,mapDispatchToProps)(Report)
