import React , { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native'

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

  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <View>
            <TouchableOpacity style={styles.restaurant} onPress={()=>this.setState({onAdd:true})}>
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
            <View style={styles.date}>
              <View style={styles.dateInput}>
                <Text style={{textAlign: 'center'}}>
                  Day
                </Text>
                <TextInput />
              </View>
              <View style={styles.dateInput}>
                <Text style={{textAlign: 'center'}}>
                  Open
                </Text>
                <TextInput />
              </View>
              <View style={styles.dateInput}>
                <Text style={{textAlign: 'center'}}>
                  Close
                </Text>
                <TextInput />
              </View>
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
    padding: 25
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
