import firebase from '../firebase'
import DeviceInfo from 'react-native-device-info';

export const setTab = (status) =>{
  return{
    type: 'Tab',
    payload: status
  }
}

export const setPage = (page) =>{
  return{
    type: 'Page',
    payload: page
  }
}

export const getOrder = () =>{
  return (dispatch) =>{
    firebase.database()
            .ref('order')
            .on('value', (snapshot) => {
              let order = snapshot.val() || []
              dispatch({
                type: 'Order',
                payload: order
              })
            });
  }
}

export const setLogin = (status) =>{
  return{
    type: 'Login',
    payload: status
  }
}

export const addMenu = (menu) =>{
  return (dispatch) =>{
    firebase.database().ref('menu').set(menu)
    firebase.database()
            .ref('menu')
            .on('value', (snapshot) => {
              dispatch({
                type: 'Menus',
                payload: snapshot.val()
              })
            });
  }
}

export const addRestaurant = (restaurant) =>{
  return (dispatch) =>{
    let deviceId = DeviceInfo.getUniqueID()
    firebase.database().ref(`restaurant/${deviceId}`).set(restaurant)
    firebase.database()
            .ref(`restaurant/${deviceId}`)
            .on('value', (snapshot) => {
              dispatch({
                type: 'Restaurant',
                payload: snapshot.val()
              })
            });
  }
}

export getRestaurant = () =>{
  return (dispatch) =>{
    firebase.database()
            .ref(`restaurant/${deviceId}`)
            .on('value', (snapshot) => {
              dispatch({
                type: 'Restaurant',
                payload: snapshot.val()
              })
            });
  }
}
