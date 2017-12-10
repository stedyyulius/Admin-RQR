import React , { Component } from 'react'
import { connect } from 'react-redux'
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import{
  View,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions
} from 'react-native'

class Customer extends Component{
  constructor(props){
    super(props)
    this.state={
      confirmed: false
    }
  }

  // componentDidMount(){
  //   alert(JSON.stringify(AppState))
  // }

  render(){
    return(
      <TouchableOpacity style={styles.tableContainer} onPress={()=>this.props.navigation.navigate('ReportDetail')}>
        <View style={styles.tableBody}>
          <View style={styles.tableTop}>
            <Image style={styles.tablePic} source={{uri: this.props.photo}} />
            <View>
              <Text style={styles.tableName}>
                {this.props.name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  tableContainer:{
    backgroundColor: 'white',
  },
  tableBody:{
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderLeftColor: 'transparent',
    padding: 15,
    width: Dimensions.get('window').width * 9.5/10,
    alignSelf: 'center'
  },
  tableCard:{
    width: Dimensions.get('window').width * 3/5,
    height: Dimensions.get('window').height / 7.5,
    borderWidth: 1,
    borderRadius: 0.5,
    borderColor: 'black',
    alignSelf: 'center',
    padding: 5
  },
  tableTop:{
    flexDirection: 'row',
  },
  tablePic:{
    borderRadius: 40,
    width: 40,
    height: 40,
    marginRight: 10
  },
  tableName:{
    fontWeight: '200',
    fontSize: 18,
    color: 'black'
  },
})

const mapStateToProps = (state) =>{
  return{
    order: state.order
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Customer)
