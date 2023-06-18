import { Component } from "react"
import './App.css'

class LogicalOperatorClass extends Component {

  render() {
    const { isLoggedIn } = this.state
    return (
      <div className="container">
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default LogicalOperatorClass