import * as React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
// Modest Grid linked via public/index.html
import './css/reset.css'
import './css/style.css'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)


// main ("ROOT") component 
class Root extends React.Component {

render() {

return (

<Provider store={store}><App /></Provider>

)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
