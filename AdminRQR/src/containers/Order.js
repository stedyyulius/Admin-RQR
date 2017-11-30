import React, { Component } from 'react'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  Dimensions
} from 'react-native'

const tables = [{
  status  : 'unconfirmed',
  price   : 'Rp120.000',
  peoples : 2
},{
  status  : 'confirmed',
  price   : 'Rp150.000',
  peoples : 1
},{
  status  : 'confirmed',
  price   : 'Rp750.000',
  peoples : 5
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
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tabButton}>
          <Button
            title="Table"
            color="black"
            onPress={()=> this.setState({page: 'table'})}
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
          <Button
            title="Take Out"
            color="black"
            onPress={()=> this.setState({page: 'Take Out'})}
          />
          </TouchableOpacity>
        </View>
        {(tables.map((t,i)=>
          <TouchableOpacity style={styles.tableContainer} key={i} onPress={()=> this.props.navigation.navigate('Table')}>
            <View style={styles.tableCard}>
              <View style={styles.tableTop}>
                <Text style={styles.tableLeft}>
                  Table #{i + 1}
                </Text>
                {(t.status === 'confirmed')
                ? <Text style={styles.tableRightConfirmed}>
                    {t.status}
                  </Text>
                : <Text style={styles.tableRight}>
                    {t.status}
                  </Text>
              }
              </View>
              <View style={{flex: 1}}></View>
              <View style={styles.tableBottom}>
                <Text style={styles.tableLeft}>
                  {t.price}
                </Text>
                <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
                  <Icon name="user-o" size={16} color="black" style={{marginTop:2}}/>
                  <Text style={styles.tableRight}>
                    {t.peoples}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  tabContainer:{
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  tabButton:{
    width: Dimensions.get('window').width / 2,
    borderWidth: 2,
    borderRadius: 0.5,
    borderColor: 'white',
  },
  tableContainer:{
    borderWidth: 1,
    borderRadius: 0.5,
    borderColor: 'black',
    borderTopWidth: 0,
    justifyContent: 'center',
    padding: 10
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
  tableBottom:{
    alignSelf: 'flex-end',
    flexDirection: 'row'
  },
  tableLeft:{
    alignSelf: 'flex-start',
    flex: 1,
    fontWeight: '500',
    color: 'black'
  },
  tableRightConfirmed:{
    alignSelf: 'flex-end',
    fontWeight: '500',
    color: 'green'
  },
  tableRight:{
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 3
  }
})

const mapStateToProps = (state) =>{
  return{

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Order)
