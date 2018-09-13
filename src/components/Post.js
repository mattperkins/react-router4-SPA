import * as React from 'react'
import { connect } from 'react-redux'


class Post extends React.Component{

handleClick = () => {
  this.props.deletePost(this.props.post.id)
  this.props.history.push('/')
}

 render(){
  console.log(this.props)
  const post = this.props.post ? (
   <div>
    <h1>{this.props.post.title}</h1>
    <p>{this.props.post.body}</p>
    <button onClick={this.handleClick}>DELETE POST</button>
   </div>
  ) : (
   <div>Loading post...</div>
  )
  return(
   <div>
    {post}
   </div>
  )
 }
}

const mapStateToProps = ( state, ownProps ) => {
    let id = ownProps.match.params.post_id
    return {
      post: state.posts.find( post => post.id === id )
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch({type: 'DELETE_POST', id})}
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)

