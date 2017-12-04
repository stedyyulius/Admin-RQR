import React, { Component } from 'react'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  Dimensions
} from 'react-native'

import TabHeader from '../components/TabHeader'

const tables = [{
  status  : 'Ordering',
  name    : 'Stedy',
  peoples : 2,
  table   : 17,
  time    : '1:14 PM',
  pic     : 'https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/995330_1009814712422752_5652905225413807790_n.jpg?oh=1b79fdc3c77bc739aa9f27a1c6fa0464&oe=5A97FE1C'
},{
  status  : 'Waiting',
  name    : 'Felix Cahyadi Tio',
  peoples : 1,
  table   : 5,
  time    : '12:05 PM',
  pic     : 'https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/p160x160/12096566_10153589536696427_3240500719548235275_n.jpg?oh=5772d7971a9bc39de1bf7a789cebff84&oe=5AA6AFB2'
}]

class Order extends Component{
  constructor(props){
    super(props)
    this.state={
      page: 'table'
    }
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Order`,
    headerTitleStyle: {
      alignSelf: 'center',
    },
  })

  render(){
    return(
      <ScrollView>
        <TabHeader tabs={['Table','Take-Out']} />
        {(this.props.page === 0)
          ? (tables.map((t,i)=>
              <TouchableOpacity style={styles.tableContainer} key={i} onPress={()=> this.props.navigation.navigate('Table')}>
                <View>
                  <View style={styles.tableTop}>
                    <Image style={styles.tablePic} source={{uri: t.pic}} />
                    <View>
                      <Text style={styles.tableName}>
                        {t.name}
                      </Text>
                      <Text style={styles.tableLeft}>
                        {t.time}
                      </Text>
                      <Text style={styles.tableLeft}>
                        Table for {t.peoples}
                      </Text>
                    </View>
                    <View style={{flex: 1}}></View>
                    <View>
                      {(t.status === 'Ordering')
                      ? <Text style={styles.tableRightOrdering}>
                          {t.status}
                        </Text>
                      : <Text style={styles.tableRightStatus}>
                          {t.status}
                        </Text>
                    }
                      <View style={{flex: 1}}></View>
                      <Text style={styles.tableRight}>
                        Table {t.table}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          : <TouchableOpacity style={styles.tableContainer}>
              <View>
                <View style={styles.tableTop}>
                  <Image style={styles.tablePic} source={{uri: 'https://scontent.fsub6-3.fna.fbcdn.net/v/t1.0-1/c1.0.160.160/p160x160/17884209_10155126257713764_4432106934479397568_n.jpg?oh=caf47838346efabee7d4c76ce996ec35&oe=5A968FBA'}} />
                  <View>
                    <Text style={styles.tableName}>
                      Yere
                    </Text>
                    {/* <Text style={styles.tableLeft}>
                      Order at 12:00 Pm
                    </Text> */}
                    <Text style={{color: 'black'}}>
                      Pickup at 12:30 PM
                    </Text>
                  </View>
                  <View style={{flex: 1}}></View>
                  <View>
                    <Text style={styles.tableRightOrdering}>
                      Ordering
                    </Text>
                    <View style={{flex: 1}}></View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  tableContainer:{
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderLeftColor: 'transparent',
    padding: 10,
    backgroundColor: 'white'
  },
  tableCard:{
    width: Dimensions.get('window').width * 3 / 5,
    height: Dimensions.get('window').height / 7.5,
    borderWidth: 1,
    borderRadius: 0.5,
    borderColor: 'black',
    alignSelf: 'center',
    padding: 5
  },
  tableTop:{
    flexDirection: 'row'
  },
  tablePic:{
    borderRadius: 60,
    width: 70,
    height: 70,
    marginLeft: 8,
    marginRight: 10
  },
  tableBottom:{
    alignSelf: 'flex-end',
    flexDirection: 'row'
  },
  tableName:{
    marginBottom: 10,
    fontWeight: '500',
    color: '#4a4a4a',
    fontSize: 18
  },
  tableLeft:{
    color: 'grey',
    fontSize: 16
  },
  tableRightOrdering:{
    color: 'blue',
    fontSize: 16
  },
  tableRightStatus:{
    color: 'red',
    fontSize: 16
  },
  tableRight:{
    marginLeft: 3,
    bottom: 0
  }
})

const mapStateToProps = (state) =>{
  return{
    page: state.page
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Order)
