import React from 'react'
import { HashLoader } from "react-spinners";

function Loading() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <HashLoader color='#FF2EFF'/>
    </div>
  )
}

export default Loading
