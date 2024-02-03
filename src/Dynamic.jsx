import React from 'react'
import { useParams } from 'react-router'

const Dynamic = () => {

    const {placeholder}=useParams();
  return (
    <div>Dynamic hellooo
        {placeholder}
    </div>
  )
}

export default Dynamic