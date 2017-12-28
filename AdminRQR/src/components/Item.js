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

class Item extends Component{
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
      (this.props.order)
      ? (this.props.order.order.map((o,i)=>
          <TouchableOpacity style={styles.tableContainer} key={i}> 
            <View style={styles.tableBody}>
              <View style={styles.tableTop}>
                <Text style={styles.tableAmmount}>
                  {o.ammount}
                </Text>
                <View>
                  <Text style={styles.tableName}>
                    {o.name}
                  </Text>
                  <Text style={styles.tablePrice}>
                    Rp{o.price}
                  </Text>
                </View>
                <View style={{flex: 1}}></View>
                <View>
                  <Text style={styles.tableName}>
                    Rp{o.price * o.ammount}
                  </Text>
                  <View style={{flex: 1}}></View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))
      : <Text>No Order</Text>
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
  tableAmmount:{
    marginRight: 10,
    fontWeight: '200',
    fontSize: 18,
    color: 'black'
  },
  tableName:{
    fontWeight: '200',
    fontSize: 18,
    color: 'black'
  },
  tablePrice:{
    fontSize: 13,
  }
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

export default connect (mapStateToProps,mapDispatchToProps)(Item)
