import React from 'react'

const EachItemInList = ({details}) => {

    //const {details} = props;
    // const {uniqueNo,imageUrl,name,role} = details 

  return (
    <li style={{listStyleType : "none"}}>
        <h2>unique Number : {details.uniqueNo}</h2>
        <img src={details.imageUrl} alt="name" />
        <h3>Name : {details.name}</h3>
        <h3>Role : {details.role}</h3>
    </li>
  )
}

export default EachItemInList