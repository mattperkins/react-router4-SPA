import * as React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class LocalPosts extends React.Component{
  render(){
  console.log(this.props)
  const { localPosts } = this.props
  const localPostList = localPosts.length ? (
   localPosts.map(localPosts => {
    return(
     <div key={localPosts.id}>
      <Link to={'/localPosts' + localPosts.id}>
       <h1>{localPosts.title}</h1>
       <p>{localPosts.body}</p>
      </Link>
     </div>
    )
   })
  ) : <p>Loading localPosts...</p>
  return(
    <div>{localPostList}</div>
  )
 }
}


const mapStateToProps = ( state ) => {
   return {
     localPosts: state.localPosts
  } 
}

export default connect(mapStateToProps)(LocalPosts)
