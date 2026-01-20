import React from 'react'
import { useParams } from 'react-router-dom'

function PostDetailsPages() {
  let param = useParams([])

  console.log(param);
  
  return (
    <div>
      <h2>salom</h2>
    </div>
  )
}

export default PostDetailsPages;
