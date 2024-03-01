import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  onClickShow = () => {
    this.setState(prevState => ({showClock: !prevState.showClock}))
  }

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          onClick={this.onClickShow}
          type="button"
          className="toggle-button"
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
