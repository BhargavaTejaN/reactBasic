import { Component } from "react"

class IfelseClassComponent extends Component {
  state = { isLoggedIn: false }

   renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button>Logout</button>
    }
    return <button>Login</button>
  }

  render() {
    return (
     <div className="container">
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default IfelseClassComponent