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
  AppState
} from 'react-native'

class CardOrder extends Component{
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
      <View style={styles.card}>
        {(this.state.confirmed)
          ? <View style={{alignSelf:'flex-end',flexDirection:'row'}}>
              <Icon name="check" size={15} color="green"/>
              <Text style={styles.confirmText}>Confirmed</Text>
            </View>
          : <TouchableOpacity style={styles.confirm}>
              <Button
                title="Confirm"
                color="black"
                onPress={()=> this.setState({confirmed: true})}/>
            </TouchableOpacity>
        }
        <View style={{flexDirection:'row'}}>
          <View style={{flexDirection: 'column'}}>
            <Image
              style={styles.person}
              source={{uri:this.props.icon}} />
            <Text style={{fontWeight: 'bold',marginBottom: 10,alignSelf:'center'}}>
              {this.props.name}
            </Text>
          </View>
          <View style={styles.menuOrdered}>
            <View style={styles.menuDetail}>
              {(this.props.order.order.map((o,i)=>
                <View key={i}>
                  <Text>
                    - {o.name} : {o.ammount}
                  </Text>
                  <Text>
                    Rp {o.totalPrice}
                  </Text>
                </View>
              ))}
              <Text style={styles.price}>
                Total: Rp {this.props.order.totalPrice}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card:{
    borderWidth: 2,
    borderRadius: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'column',
    padding: 10,
    margin: 10
  },
  person:{
    width: 80,
    height: 80,
    marginRight: 20
  },
  menuOrdered:{
    flexDirection: 'column',
  },
  menuDetail:{
    flex: 1
  },
  price:{
    fontWeight: 'bold'
  },
  confirm:{
    width: 80,
    alignSelf: 'flex-end'
  },
  confirmText:{
    color: 'green',
    fontSize: 12,
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

export default connect (mapStateToProps,mapDispatchToProps)(CardOrder)
