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

import Totals from './Totals'

import { getOrder } from '../actions'

class CardOrder extends Component{
  constructor(props){
    super(props)
    this.state={
      confirmed: false
    }
  }

  componentDidMount(){
    this.props.getOrder()
  }

  serviceCharge(){
    if (this.props.order) {
      return this.props.order.totalPrice / 10
    }
  }

  tax(){
    if (this.props.order) {
      return this.props.order.totalPrice + this.serviceCharge() / 10
    }
  }

  totalPrice(){
    if (this.props.order) {
      return this.props.order.totalPrice + this.serviceCharge() + this.tax()
    }
  }

  render(){
    return(
      <TouchableOpacity style={styles.tableContainer}>
        <View style={styles.tableBody}>
          <View style={styles.tableTop}>
            <Image style={styles.tablePic} source={{uri: 'https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/12096566_10153589536696427_3240500719548235275_n.jpg?oh=5772d7971a9bc39de1bf7a789cebff84&oe=5AA6AFB2'}} />
            <View>
              <Text style={styles.tableName}>
                Felix Cahyadi Tio
              </Text>
            </View>
            <View style={{flex: 1}}></View>
            <View>
              <Text style={styles.tableRightOrdering}>
                Confirmed
              </Text>
              <View style={{flex: 1}}></View>
            </View>
          </View>
          {(this.props.order.order)
            ? (this.props.order.order.map((o,i)=>
                <View style={{flexDirection: 'row'}} key={i}>
                    <Text style={styles.menuText}>
                      {o.ammount}
                    </Text>
                    <Text style={styles.menuText}>
                      {o.name}
                    </Text>
                    <View style={{flex:1}}></View>
                    <View style={{alignSelf: 'flex-end'}}>
                      <Text style={styles.menuText}>
                        Rp{o.price}
                      </Text>
                    </View>
                </View>
              ))
            : <Text>Loading...</Text>
          }
          <View style={{paddingLeft: 12}}>
            <Text>
               Memo:
            </Text>
            <Text>
              No Sugar
            </Text>
            <Totals />
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
    marginBottom: 20
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
  tableRightOrdering:{
    color: 'green'
  },
  menuText:{
    color: 'black',
    fontSize: 16,
    marginRight: 10
  },
  menuTotal:{
    fontWeight: '500',
    fontSize: 16,
    color: 'black'
  }
})

const mapStateToProps = (state) =>{
  return{
    order: state.order
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getOrder: () => dispatch(getOrder())
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(CardOrder)
