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
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Restaurant_building_clip_art.svg/2000px-Restaurant_building_clip_art.svg.png',
      onAdd: false
    }
  }

  static navigationOptions = ({ navigation }) => ({
    header:null
  })

  upload(){
  ImagePicker.launchImageLibrary(options, (response) => {
  alert(response.uri);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    // You can also display the image using data:
    // let source = { uri: 'data:image/jpeg;base64,' + response.data };

    this.setState({
      image: response.uri
    });
  }
});
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
            <TextInput />

            <Text>
              Address
            </Text>
            <TextInput />

            <Text>
              Business Tags
            </Text>
            <TextInput />

            <Text>
              Average Price For One
            </Text>
            <TextInput />

            <Text>
              Opening Hours
            </Text>
            <TextInput />
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
              </View> */}
            </View>
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
  content:{
    height: 170
  },
  form:{
    marginTop: 20,
    padding: 25,
    marginBottom: 50
  },
  date:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4
  },
  dateInput:{
    width: Dimensions.get('window').width / 3.5,
    justifyContent: 'center',
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

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
