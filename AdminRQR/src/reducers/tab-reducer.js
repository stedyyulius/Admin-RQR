const initialState = true

export default (state = initialState,action) =>{
    if(action.type === 'Tab'){
      if(!action.payload){
        return initialState
      }
      return action.payload
    }
    else{
      return state
    }
}
