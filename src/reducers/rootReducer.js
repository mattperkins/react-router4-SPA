const initState = {
  posts: [
    {id: 101, title: 'The first thing we heard', body: 'Sound'},
    {id: 202, title: 'The second thing we heard', body: 'Speech'},
    {id: 303, title: 'The third thing we heard', body: 'Silence'},
  ]
}
const rootReducer = (state = initState, action) => {
  return state
}

export default rootReducer
