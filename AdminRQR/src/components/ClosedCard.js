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

class ClosedCard extends Component{
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
            <Image style={styles.tablePic} source={{uri: 'https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/995330_1009814712422752_5652905225413807790_n.jpg?oh=1b79fdc3c77bc739aa9f27a1c6fa0464&oe=5A97FE1C'}} />
            <View>
              <Text style={styles.tableName}>
                Stedy Yulius
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
          <View style={styles.tableTop}>
            <View>
              <Text style={styles.tableName}>
               Total
              </Text>
            </View>
            <View style={{flex: 1}}></View>
            <View>
              <Text style={styles.tableName}>
                Rp 242.000
              </Text>
              <View style={{flex: 1}}></View>
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

export default connect (mapStateToProps,mapDispatchToProps)(ClosedCard)
