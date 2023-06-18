import React,{useState} from 'react'

const IfElseWithHook = () => {

    // defining the hook 
    const [isLoggedIn,setIsLoggedIn] = useState(true)

    const renderAuthButton = () => {
        if(!isLoggedIn === true){
            return <button>Logout</button>
        }
        return <button>Login</button>
    }

  return (
    <div>
        {renderAuthButton}
    </div>
  )
}

export default IfElseWithHook