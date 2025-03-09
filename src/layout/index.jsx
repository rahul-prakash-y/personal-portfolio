import { NavBar } from '@core/ui'
import React from 'react'
import { PortfolioPage } from '../screens'
export const LayoutPage = () => {
  const [tab,setTab] = React.useState(()=>{
    return localStorage.getItem('tab') || 0
  })

  React.useEffect(()=>{
    localStorage.setItem('tab',tab)
  },[tab])
  return (
    <div className='min-h-screen bg-black w-fit'>
      <NavBar onChange={(id)=>setTab(id-1)}/>
      <div className=''>
        <PortfolioPage tab={tab}/>
      </div>
    </div>
  )
}

