import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import{
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  Dimensions
} from 'react-native'

import TabHeader from '../components/TabHeader'
import CardOrder from '../components/CardOrder'
import ClosedCard from '../components/ClosedCard'
import Items from '../components/Item'
import Totals from '../components/Totals'

import { setTab } from '../actions'

const participants =[{
  name: 'Stedy',
  icon: 'https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/995330_1009814712422752_5652905225413807790_n.jpg?oh=1b79fdc3c77bc739aa9f27a1c6fa0464&oe=5A97FE1C'
}]

class Table extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Table 17`,
    headerTitleStyle: {
      alignSelf: 'center'
    },
  })

  // componentWillMount(){
  //   this.props.setTab(0)
  // }

  render(){
    const { navigate } = this.props.navigation
    return(
      <ScrollView style={{backgroundColor:'white'}}>
        <TabHeader tabs={['Customer','Items']}/>
        <View>
          {(this.props.page === 0)
            ? <ScrollView>
                {(participants.map((o,i)=>
                  <CardOrder icon={o.icon} name={o.name} key={i}/>
                ))}
                <ClosedCard />
              </ScrollView>
            : <View style={{padding: 10}}>
                <Items />
                <Totals />
              </View>
          }
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottom}>
            <View>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.detailAmmount}>
                  {this.props.order.totalAmmount}
                </Text>
                <Text style={styles.detailText}>
                  Items
                </Text>
              </View>
              <Text style={styles.detailText}>
                Rp{this.props.order.grandTotal}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bottom}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                Confirm
              </Text>
              <Text style={styles.buttonText}>
                Payment
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  confirmButton:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  space:{
    flex: 1
  },
  menuText:{
    color: 'black',
    fontSize: 16
  },
  menuTotal:{
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
    marginBottom: 20
  },
  tableContainer:{
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  detailAmmount:{
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
    marginRight: 5
  },
  detailText:{
    color: 'grey',
    fontWeight: '500',
    fontSize: 18
  },
  bottom:{
    width: Dimensions.get('window').width / 2,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5
  },
  button:{
    borderRadius: 10,
    width: 140,
    height: 70,
    backgroundColor: 'grey',
    alignItems: 'center',
    padding: 10
  },
  buttonText:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: '500'
  },
  bottomContainer:{
    borderTopWidth: 1,
    borderBottomWidth: 0,
    borderBottomColor: 'grey',
    borderLeftColor: 'transparent',
    flexDirection: 'row',
    height: '100%',
    backgroundColor: 'white',
    marginBottom: 45
  }
})

const mapStateToProps = (state) =>{
  return{
    order : state.order,
    tab   : state.tab,
    page  : state.page
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    setTab: (status) => dispatch(setTab(status))
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Table)
