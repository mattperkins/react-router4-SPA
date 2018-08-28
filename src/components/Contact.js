import * as React from 'react'

export default (props) => {
 // redirects to about page after 1 sec
 setTimeout(() => {
  props.history.push('/about')
 }, 1000) 
 return (
<div>
 <h1>Contact</h1>
 <p>settimout function redirects to about page</p>
</div>
 )}