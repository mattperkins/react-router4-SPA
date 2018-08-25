import * as React from 'react'

export default (props) => {
 // redirects to about page after 1 sec
 setTimeout(() => {
  props.history.push('/about')
 }, 1000) 
 return (
<div>
 <h1>Contact</h1>
 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint delectus repellendus esse mollitia dicta aliquid molestias temporibus reiciendis et! Ipsa doloribus facilis voluptatum, cum blanditiis omnis nobis eius repudiandae repellat.</p>
</div>
 )}