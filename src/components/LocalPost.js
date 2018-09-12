import * as React from 'react'
import { connect } from 'react-redux'

class LocalPost extends React.Component{

 render(){
  const localPost = this.props.localPost ? (
   <div>
    <h1>{this.props.localPost.title}</h1>
    <p>{this.props.localPost.body}</p>
   </div>
  ) : (
   <div>Loading localpost...</div>
  )
  return(
   <div>
    {localPost}
   </div>
  )
 }
}

const mapStateToProps = ( state, ownProps ) => {
    let id = ownProps.match.params.localPost_id
    return {
      localPost: state.localPosts.find( localPost => localPost.id === id )
  } 
}

export default connect(mapStateToProps)(LocalPost)
