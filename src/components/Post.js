import * as React from 'react'
import axios from 'axios'

class Post extends React.Component{
 state = {
  post: null
 }
 componentDidMount(){
  // console.log(this.props)
  let id = this.props.match.params.post_id
  axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
   .then(res => {
     this.setState({
      post: res.data
     })
     console.log(res)
   })
 }
 render(){
  return(
   <div>
    
   </div>
  )
 }
}
export default Post