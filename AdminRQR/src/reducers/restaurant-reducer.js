const initialState = {}

export default (state = initialState,action) =>{
    if(action.type === 'Restaurant'){
      return action.payload
    }
    else{
      return state
    }
}
