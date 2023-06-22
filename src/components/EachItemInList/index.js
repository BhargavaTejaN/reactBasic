import React from 'react'

const EachItemInList = (props) => {

    const {details,deletePic} = props;
    const {uniqueNo,imageUrl,name,role} = details;

    const onDeletePic = () => {
      deletePic(uniqueNo);
    }

  return (
    <li style={{listStyleType : "none"}}>
        <h2>unique Number : {uniqueNo}</h2>
        <img src={imageUrl} alt="name" />
        <h3>Name : {name}</h3>
        <h3>Role : {role}</h3>
        <button onClick={onDeletePic} type="button">Delete Pic</button>
    </li>
  )
}

export default EachItemInList