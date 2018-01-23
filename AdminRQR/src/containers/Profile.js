import React , { Component } from 'react'
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker'
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Picker
} from 'react-native'

import { getRestaurant, addRestaurant } from '../actions'

const options = {
  title: 'Select Restaurant Image',
  // customButtons: [
  //   {name: 'fb', title: 'Choose Photo from Facebook'},
  // ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class Profile extends Component{
  constructor(props){
    super(props)
    this.state={
      onAdd: false,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Restaurant_building_clip_art.svg/2000px-Restaurant_building_clip_art.svg.png',
      businessName: '',
      address: '',
      businessTags: '',
      averagePrice: '',
      openingHours: '',
    }
  }

  static navigationOptions = ({ navigation }) => ({
    header:null
  })

  componentDidMount(){
    this.props.getRestaurant()
  }

  async componentWillReceiveProps(){
    let data = this.props.restaurant
    await data
    this.setState({
      image: this.props.restaurant.image,
      businessName: this.props.restaurant.businessName,
      address: this.props.restaurant.address,
      businessTags: this.props.restaurant.businessTags,
      averagePrice: this.props.restaurant.averagePrice,
      openingHours: this.props.restaurant.openingHours,
    })
  }

  upload(){
    ImagePicker.launchImageLibrary(options, (response) => {
    this.setState({
      image: response.uri
    });
});
  }

  addRestaurant(){
    let restaurant = {
      image: this.state.image,
      businessName: this.state.businessName,
      address: this.state.address,
      businessTags: this.state.businessTags,
      averagePrice: this.state.averagePrice,
      openingHours: this.state.openingHours,
    }
    this.props.addRestaurant(restaurant)
    alert('Restaurant Data Saved')
  }


  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <View>
            <TouchableOpacity style={styles.restaurant} onPress={()=>this.upload()}>
              <Image
                style={styles.restaurant}
                source={{uri:this.state.image}}
              />
            </TouchableOpacity>
            <View style={styles.content}>
              <TouchableOpacity style={styles.iconContainer}>
                <Text style={styles.edit}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.form}>
            <Text>
              Business Name
            </Text>
            <TextInput
              value={this.state.businessName}
              editable={true}
              onChangeText={(e)=> this.setState({businessName:e})}
            />

            <Text>
              Address
            </Text>
            <TextInput
              value={this.state.address}
              editable={true}
              onChangeText={(e)=> this.setState({address:e})}
            />

            <Text>
              Business Tags
            </Text>
            <TextInput
              value={this.state.businessTags}
              editable={true}
              onChangeText={(e)=> this.setState({businessTags:e})}
            />

            <Text>
              Average Price For One
            </Text>
            <TextInput
              value={this.state.averagePrice}
              editable={true}
              onChangeText={(e)=> this.setState({averagePrice:e})}
            />

            <Text>
              Opening Hours
            </Text>
            <TextInput
              value={this.state.openingHours}
              editable={true}
              onChangeText={(e)=> this.setState({openingHours:e})}
            />
            {/* <View style={styles.date}>
              <View style={styles.dateInput}>
                <Text style={{textAlign: 'center'}}>
                  Day
                </Text>
                <Picker>
                  <Picker.Item label="Mon-Sun" value="Mon-Sun" />
                  <Picker.Item label="Mon-Fri" value="Mon-Fri" />
                </Picker>
              </View>
              <View style={styles.dateInput}>
                <Text style={{textAlign: 'center'}}>
                  Open
                </Text>
                <Picker>
                  <Picker.Item label="01:00 AM" value="01:00 AM" />
                  <Picker.Item label="02:00 AM" value="02:00 AM" />
                  <Picker.Item label="03:00 AM" value="03:00 AM" />
                  <Picker.Item label="04:00 AM" value="04:00 AM" />
                  <Picker.Item label="05:00 AM" value="05:00 AM" />
                  <Picker.Item label="06:00 AM" value="06:00 AM" />
                  <Picker.Item label="07:00 AM" value="07:00 AM" />
                  <Picker.Item label="08:00 AM" value="08:00 AM" />
                  <Picker.Item label="09:00 AM" value="09:00 AM" />
                  <Picker.Item label="10:00 AM" value="10:00 AM" />
                  <Picker.Item label="11:00 AM" value="11:00 AM" />
                  <Picker.Item label="12:00 AM" value="12:00 AM" />
                  <Picker.Item label="13:00 AM" value="13:00 AM" />
                  <Picker.Item label="14:00 AM" value="14:00 AM" />
                  <Picker.Item label="15:00 AM" value="15:00 AM" />
                  <Picker.Item label="16:00 AM" value="16:00 AM" />
                  <Picker.Item label="17:00 AM" value="17:00 AM" />
                  <Picker.Item label="18:00 AM" value="18:00 AM" />
                  <Picker.Item label="19:00 AM" value="19:00 AM" />
                  <Picker.Item label="20:00 AM" value="20:00 AM" />
                  <Picker.Item label="21:00 AM" value="21:00 AM" />
                  <Picker.Item label="22:00 AM" value="22:00 AM" />
                  <Picker.Item label="23:00 AM" value="23:00 AM" />
                  <Picker.Item label="24:00 AM" value="24:00 AM" />
                </Picker>
              </View>
              <View style={styles.dateInput}>
                <Text style={{textAlign: 'center'}}>
                  Close
                </Text>
                <Picker>
                  <Picker.Item label="01:00 AM" value="01:00 AM" />
                  <Picker.Item label="02:00 AM" value="02:00 AM" />
                  <Picker.Item label="03:00 AM" value="03:00 AM" />
                  <Picker.Item label="04:00 AM" value="04:00 AM" />
                  <Picker.Item label="05:00 AM" value="05:00 AM" />
                  <Picker.Item label="06:00 AM" value="06:00 AM" />
                  <Picker.Item label="07:00 AM" value="07:00 AM" />
                  <Picker.Item label="08:00 AM" value="08:00 AM" />
                  <Picker.Item label="09:00 AM" value="09:00 AM" />
                  <Picker.Item label="10:00 AM" value="10:00 AM" />
                  <Picker.Item label="11:00 AM" value="11:00 AM" />
                  <Picker.Item label="12:00 AM" value="12:00 AM" />
                  <Picker.Item label="13:00 AM" value="13:00 AM" />
                  <Picker.Item label="14:00 AM" value="14:00 AM" />
                  <Picker.Item label="15:00 AM" value="15:00 AM" />
                  <Picker.Item label="16:00 AM" value="16:00 AM" />
                  <Picker.Item label="17:00 AM" value="17:00 AM" />
                  <Picker.Item label="18:00 AM" value="18:00 AM" />
                  <Picker.Item label="19:00 AM" value="19:00 AM" />
                  <Picker.Item label="20:00 AM" value="20:00 AM" />
                  <Picker.Item label="21:00 AM" value="21:00 AM" />
                  <Picker.Item label="22:00 AM" value="22:00 AM" />
                  <Picker.Item label="23:00 AM" value="23:00 AM" />
                  <Picker.Item label="24:00 AM" value="24:00 AM" />
                </Picker>
              </View>
            </View> */}
          </View>
          <TouchableOpacity style={styles.save} onPress={()=>this.addRestaurant()}>
            <Text style={styles.saveText}>
              Save
            </Text>
          </TouchableOpacity>
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
  content:{
    height: 170
  },
  form:{
    marginTop: 20,
    padding: 25,
  },
  date:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4
  },
  dateInput:{
    width: Dimensions.get('window').width / 3.5,
    justifyContent: 'center',
  },
  save:{
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 50
  },
  saveText:{
    color: 'white',
    textAlign: 'center'
  }
})

const mapStateToProps = (state) =>{
  return{
    restaurant: state.restaurant
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getRestaurant: () => dispatch(getRestaurant()),
    addRestaurant: (restaurant) => dispatch(addRestaurant(restaurant))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
