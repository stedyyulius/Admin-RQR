import React, { Component } from 'react'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import{
  View,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  NavigatorAndroid,
  Image,
  Button,
  ScrollView,
  Dimensions
} from 'react-native'

import MenuButton from '../components/MenuButton'
import MenuType from '../components/MenuType'
import MenuList from '../components/MenuList'

import { addMenu } from '../actions'

class Menus extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Menus`,
    headerTitleStyle: {
      alignSelf: 'center'
    },
    header: null
  })

  // takePicture() {
  //   const options = {};
  //   //options.location = ...
  //   this.camera.capture({metadata: options})
  //     .then((data) => console.log(data))
  //     .catch(err => console.error(err));
  // }

  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Image
              style={styles.restaurant}
              source={{uri: 'http://1.bp.blogspot.com/-kbxbz-l46z4/VF9bp5MNegI/AAAAAAAABGs/6mUcvnZKCKA/s1600/Abuba-Steak.jpg'}} />
            <View style={styles.darken}>
              <TouchableOpacity style={styles.iconContainer}>
                <Text style={styles.edit}>
                  Edit
                </Text>
              </TouchableOpacity>
              <Text style={styles.restaurantTitle}>
                Abuba Steak
              </Text>
              <Text style={styles.restaurantSubTitle}>
                Opening Hours: 10:00 - 22:00
              </Text>
              <MenuButton />
            </View>
          </View>
            {/* <View style={styles.buttonContainer}>

            </View> */}
            <View style={styles.actions}>
              <MenuType text="Appetizer"/>
              <MenuType text="Pasta"/>
              <MenuType text="Mains"/>
              <MenuType text="Seafood"/>
            </View>
            <View style={styles.menuContainer}>
              {/* {(this.state.isAdd)
                ? <View>
                    <Text>
                      Copy Image Url here
                    </Text>
                    <TextInput />
                  </View>
                :
              } */}
              <View style={styles.addItem}>
                <View style={styles.addItemRectangle}></View>
                <TouchableOpacity style={{alignSelf:'center'}}>
                  <Text style={styles.addItemText}>
                    + Add Item
                  </Text>
                </TouchableOpacity>
              </View>
              {/* <MenuList pic='https://media-cdn.tripadvisor.com/media/photo-s/09/74/41/2e/abuba-steak.jpg' title="T-Bone Steak" price={150000}/>
              <MenuList pic='http://hargamenu.com/wp-content/uploads/2014/09/harga-abuba-steak.jpg' title="Rib-Eye NZ Steak" price={120000}/>
              <MenuList pic='http://1.bp.blogspot.com/-kbxbz-l46z4/VF9bp5MNegI/AAAAAAAABGs/6mUcvnZKCKA/s1600/Abuba-Steak.jpg' price={100000} title="Sirloin Steak"/>
              <MenuList pic='https://img.qraved.co/v2/image/data/Indonesia/Jakarta/Tebet/Abuba_Steak/sirloin_us_steak-640x424.png' price={150000} title="Sirloin US Steak"/>
              <MenuList pic='http://www.sparetime.jakartafamilia.com/wp-content/uploads/2016/11/ABUBA-STEAK-IMAGE-4.jpg' price={250000} title="Sirloin Wagyu"/>
              <MenuList pic='http://cityhighlight.com/wp-content/uploads/2016/02/Tenderlionn.png' price={70000} title="Tenderloin Steak"/> */}
            </View>
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#F5FCFF'
 },
 iconContainer:{
   flexDirection: 'row',
   alignSelf: 'flex-end',
 },
 edit:{
   color: 'white',
   fontSize: 18,
   marginTop: 7,
   marginRight: 10
 },
  restaurant:{
    alignSelf: 'stretch',
    height: 170,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  actions:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 15,
  },
  restaurantTitle:{
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontSize: 24,
  },
  restaurantSubTitle:{
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
  },
  darken:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 170
  },
  menuContainer:{
    marginBottom: 100,
    padding: 20
  },
  addItem:{
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    flex: 1
  },
  addItemRectangle:{
    backgroundColor: '#d8d8d8',
    width: 120,
    height: 100
  },
  addItemText:{
    color: '#4a90e2',
    fontSize: 20,
    marginLeft: 50
  }
})

const mapStateToProps = (state) =>{
  return{
    menus: state.menus
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addMenu: (menu) => dispatch(addMenu(menu))
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Menus)
