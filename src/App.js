import * as React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component{
 render(){
  return(
    <BrowserRouter>
     <Navbar /> 
      
    </BrowserRouter>
  )
 }
}