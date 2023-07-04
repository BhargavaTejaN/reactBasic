import React from 'react'

const PostsFile = (props) => {

    const {details} = props;
    const {userId,id,title,body} = details

    console.log(details)

  return (
    <li style={{listStyleType : 'none'}}>
        <h1>{userId}</h1>
        <h2>{id}</h2>
        <h2>{title}</h2>
        <h3>{body}</h3>
    </li>
  )
}

export default PostsFile