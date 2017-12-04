const initialState = 0

export default (state = initialState,action) =>{
    if(action.type === 'Page'){
      if(!action.payload){
        return initialState
      }
      return action.payload
    }
    else{
      return state
    }
}
