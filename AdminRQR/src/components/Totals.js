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

  render(){
    return(
      <TouchableOpacity style={{backgroundColor:'white'}}>
          <View style={{flexDirection: 'row',marginTop: 10}}>
              <Text style={styles.menuText}>
                Subtotal
              </Text>
              <View style={{flex:1}}></View>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={styles.menuText}>
                  Rp{this.props.order.totalPrice}
                </Text>
              </View>
          </View>
          <View style={{flexDirection: 'row'}}>
              <Text style={styles.menuText}>
                Service Charge (10%)
              </Text>
              <View style={{flex:1}}></View>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={styles.menuText}>
                  Rp{this.props.order.serviceCharge}
                </Text>
              </View>
          </View>
          <View style={{flexDirection: 'row'}}>
              <Text style={styles.menuText}>
                Tax (10%)
              </Text>
              <View style={{flex:1}}></View>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={styles.menuText}>
                  Rp{this.props.order.tax}
                </Text>
              </View>
          </View>
          <View style={{flexDirection: 'row',marginTop: 10}}>
              <Text style={styles.menuTotal}>
                Total
              </Text>
              <View style={{flex:1}}></View>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={styles.menuTotal}>
                  Rp{this.props.order.grandTotal}
                </Text>
              </View>
          </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
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
