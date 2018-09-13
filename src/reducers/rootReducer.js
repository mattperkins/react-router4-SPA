const initState = {
  posts: [
    {id: '1', title: 'The first thing we heard', body: 'Sound'},
    {id: '2', title: 'The second thing we heard', body: 'Speech'},
    {id: '3', title: 'The third thing we heard', body: 'Silence'},
  ]
}
const rootReducer = (state = initState, action) => {
  if(action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
  })
    return {
      ...state, posts: newPosts
  }
}
  return state
}

export default rootReducer
