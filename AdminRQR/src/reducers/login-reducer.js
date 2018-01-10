const initialState = null

export default (state = initialState,action) =>{
    if(action.type === 'Login'){
      if(!action.payload){
        return initialState
      }
      return action.payload
    }
    else{
      return state
    }
}
