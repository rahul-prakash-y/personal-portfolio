import { NavBar } from '@core/ui'
import React from 'react'
import { Outlet } from 'react-router-dom'
export const LayoutPage = () => {
  return (
    <div className='w-screen min-h-screen bg-black'>
      <NavBar />
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

