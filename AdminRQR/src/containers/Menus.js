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
  ScrollView
} from 'react-native'

// import MenuButton from '../components/MenuButton'
import MenuType from '../components/MenuType'
import MenuList from '../components/MenuList'

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
            </View>
          </View>
            <View style={styles.buttonContainer}>
              {/* <MenuButton text="Food"/>
              <MenuButton text="Drink"/>
              <MenuButton text="Dessert"/> */}
            </View>
            <View style={styles.actions}>
              <MenuType text="Appetizer"/>
              <MenuType text="Pasta"/>
              <MenuType text="Mains"/>
              <MenuType text="Seafood"/>
            </View>
            <View style={styles.menuContainer}>
              <MenuList pic='https://media-cdn.tripadvisor.com/media/photo-s/09/74/41/2e/abuba-steak.jpg' title="T-Bone Steak" price={150000}/>
              <MenuList pic='http://hargamenu.com/wp-content/uploads/2014/09/harga-abuba-steak.jpg' title="Rib-Eye NZ Steak" price={120000}/>
              <MenuList pic='http://1.bp.blogspot.com/-kbxbz-l46z4/VF9bp5MNegI/AAAAAAAABGs/6mUcvnZKCKA/s1600/Abuba-Steak.jpg' price={100000} title="Sirloin Steak"/>
              <MenuList pic='https://img.qraved.co/v2/image/data/Indonesia/Jakarta/Tebet/Abuba_Steak/sirloin_us_steak-640x424.png' price={150000} title="Sirloin US Steak"/>
              <MenuList pic='http://www.sparetime.jakartafamilia.com/wp-content/uploads/2016/11/ABUBA-STEAK-IMAGE-4.jpg' price={250000} title="Sirloin Wagyu"/>
              <MenuList pic='http://cityhighlight.com/wp-content/uploads/2016/02/Tenderlionn.png' price={70000} title="Tenderloin Steak"/>
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
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  buttonTouchable: {
    padding: 16,
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
  review:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#16a187',
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'center'
  },
  reviewPrice:{
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  reviewOrder:{
    flex: 1,
    color:'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center'
  },
  reviewAmmount:{
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start'
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
    marginBottom: 100
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

export default connect (mapStateToProps,mapDispatchToProps)(Menus)