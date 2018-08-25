import * as React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
// Modest Grid linked via public/index.html
import './css/reset.css'
import './css/style.css'

// main ("ROOT") component 
class Root extends React.Component {

render() {

return (


<div className="wrapper">
<div className="row">

<div className="col-12">
  <h1>Hello, World!</h1>
</div>

<div className="col-12">
  <input type="text" placeholder="Put your text here"/>
  <button>I am a button</button>
</div>

</div>
</div>


)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
