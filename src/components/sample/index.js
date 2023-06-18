import React from 'react'

const Sample = (props) => {

    const {name,age} = props

  return (
    <div>
        <h2>This is sample Component</h2>
        <h2>My Name is {name} of age {age}</h2>
    </div>
  )
}

export default Sample