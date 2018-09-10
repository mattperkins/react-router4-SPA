import * as React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
// Modest Grid linked via public/index.html
import './css/reset.css'
import './css/style.css'
import App from './App'
import { createStore } from 'redux'

const store = createStore()


// main ("ROOT") component 
class Root extends React.Component {

render() {

return (

<App />


)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
