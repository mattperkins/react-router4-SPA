import * as React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends React.Component{
  render(){
    const {posts} = this.props
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

const mapStateToProps = ( state ) => {
   return {
     posts: state.posts
  } 
}


export default connect(mapStateToProps)(Home)
