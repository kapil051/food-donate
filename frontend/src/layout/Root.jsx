import React from 'react'
import { Outlet } from 'react-router-dom';
function Root() {
  return (
    <div>
        <div className='min-h-[calc(100vh-64px)]'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Root