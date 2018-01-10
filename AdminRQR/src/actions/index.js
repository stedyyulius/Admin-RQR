import firebase from '../firebase'

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
