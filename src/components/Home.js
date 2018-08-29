import * as React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Home extends React.Component{
 state = {
  posts: []
 }
 componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
   this.setState({
    posts: res.data.slice(0,10)
   })
  })
 }
 render(){
  const {posts} = this.state
  const postList = posts.length ? (
   posts.map(post => {
    return(
     <div key={post.id}>
      <Link to={'/' + post.id}>
       <h1>{post.title}</h1>
       <p>{post.body}</p>
      </Link>
     </div>
    )
   })
  ) : <p>Loading posts...</p>
  return(
    <div>{postList}</div>
  )
 }
}
export default Home