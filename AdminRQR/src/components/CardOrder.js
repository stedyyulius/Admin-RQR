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
          <View style={{flexDirection: 'row'}}>
              <Text style={styles.menuText}>
                1 Quinoa Salad
              </Text>
              <View style={{flex:1}}></View>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={styles.menuText}>
                  Rp 75,000
                </Text>
              </View>
          </View>
          <View style={{flexDirection: 'row'}}>
              <Text style={styles.menuText}>
                2 Extreme Berry Juice
              </Text>
              <View style={{flex:1}}></View>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={styles.menuText}>
                  Rp 50,000
                </Text>
              </View>
          </View>
          <View style={{paddingLeft: 12}}>
            <Text>
               Memo:
            </Text>
            <Text>
              No Sugar
            </Text>
          </View>
          <View style={{flexDirection: 'row',marginTop: 10}}>
              <Text style={styles.menuText}>
                Subtotal
              </Text>
              <View style={{flex:1}}></View>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={styles.menuText}>
                  Rp 125,000
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
                  Rp 12,500
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
                  Rp 13,750
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
                  Rp 151,250
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
    fontSize: 16
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

  }
}

export default connect (mapStateToProps,mapDispatchToProps)(CardOrder)
