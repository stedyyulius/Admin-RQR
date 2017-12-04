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
