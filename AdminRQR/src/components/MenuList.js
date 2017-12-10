import React, { Component } from 'react'
import { connect } from 'react-redux'
import{
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Button
} from 'react-native'

class MenuList extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return(
      <View style={styles.itemContainer}>
        <Image
          style={styles.item}
          source={{uri:this.props.pic}} />
          <View style={styles.menuDetail}>
            <Text style={styles.menuDetailTitle}>
              {this.props.title}
            </Text>
            <Text>
             Rp{this.props.price}
            </Text>
               {/* <View style={styles.stretch}>
                  <TouchableOpacity style={styles.buttonMinus} onPress={()=>this.ammountHandler('decrease')}>
                    <Image style={styles.select} source={{uri:'http://www.pvhc.net/img157/gdvtflklbitxzfjwggsm.png'}} />
                  </TouchableOpacity>
                  <Text style={styles.ammount}>{this.state.ammount}</Text>
                  <TouchableOpacity onPress={()=>this.ammountHandler('increase')}>
                    <Image style={styles.select} source={{uri:'https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//plus1600.png'}} />
                  </TouchableOpacity>
              </View> */}
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 5,
    margin: 5,
    flexDirection: 'row',
  },
  item:{
    width: 70,
    height: 70,
    marginRight: 20
  },
  menuDetail:{
    flexDirection: 'column',
    flex: 1,
  },
  menuDetailTitle:{
    fontWeight: 'bold',
  },
  stretch:{
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  buttonMinus:{
    marginRight:0
  },
  select:{
    width: 20,
    height: 20
  },
  add:{
    width: 50,
    alignSelf: 'flex-end',
  },
  ammount:{
    marginRight: 5,
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 15
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

export default connect (mapStateToProps,mapDispatchToProps)(MenuList)
