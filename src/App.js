import * as React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Post from './components/Post'
// import LocalPosts from './components/LocalPosts'
// import LocalPost from './components/LocalPost'

class App extends React.Component{
 render(){
  return(
    <BrowserRouter>
     <div className="wrapper">
      <Navbar /> 
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/:post_id' component={Post} /> 

        {/* <Route exact path='/' component={LocalPosts} />
        <Route path='/:localPost_id' component={LocalPost} /> */}

        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
    </BrowserRouter>
  )
 }
}

export default App
