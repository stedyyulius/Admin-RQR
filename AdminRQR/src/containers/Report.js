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
import Navbar from '../components/Navbar'

class Report extends Component{
  constructor(props){
    super(props)
    this.state={
      page: 'overview',
      onSearch: false
    }
  }

  static navigationOptions = ({ navigation }) => ({
    header:null
  })

  render(){
    return(
      <ScrollView>
        <Navbar />
        <TabHeader tabs={["Customer","Menu"]} />
        <Customer navigation={this.props.navigation} name="Felix Cahyadi Tio" photo="https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/12096566_10153589536696427_3240500719548235275_n.jpg?oh=5772d7971a9bc39de1bf7a789cebff84&oe=5AA6AFB2" />
        <Customer navigation={this.props.navigation} name="Stedy Yulius" photo="https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/995330_1009814712422752_5652905225413807790_n.jpg?oh=1b79fdc3c77bc739aa9f27a1c6fa0464&oe=5A97FE1C" />
        <Customer navigation={this.props.navigation} name="Brandon Tan" photo="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" />
        <Customer navigation={this.props.navigation} name="Joko Susilo" photo="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" />
        <Customer navigation={this.props.navigation} name="Kim Ji Sung" photo="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" />
        <Customer navigation={this.props.navigation} name="Adi Wijaya" photo="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" />
        <Customer navigation={this.props.navigation} name="Jake Johnson" photo="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" />
        <Customer navigation={this.props.navigation} name="John Doe" photo="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" />
        <View style={{height:45,backgroundColor:'white'}}></View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
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
    width: Dimensions.get('window').width * 6.5/8,
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
