import React from 'react'
import { MenuIcon } from '../../../../public/menuIcon'

export const NavBar = ({onChange = ()=> false}) => {
    const navSections = [
            {
                id:1,
                navHead:"Home",
                route:"/"
            },
            {
                id:2,
                navHead:"About Me",
                route:"/about-me"
            },
            {
                id:3,
                navHead:"Skills",
                route:"/skills"
            },
            {
                id:4,
                navHead:"Projects",
                route:"/projects"
            },
            {
                id:5,
                navHead:"Contact",
                route:"/contact"
            },
        ]
    const [selectedNav,setSelectedNav] = React.useState(1)
    const [isOpen,SetIsOpen] = React.useState(false)
    function handleNavChange(id) {
        setSelectedNav(id)
        onChange(id)
        SetIsOpen(false)
    }
    React.useEffect(()=>{
        setSelectedNav(Number(localStorage.getItem('tab'))+1)
    },[selectedNav])
  return (
    <div className='w-screen'>
      <div className='pt-5 flex items-center justify-between w-4/5 mx-auto '>
        <p className='font-poppins text-red-400 text-2xl font-semibold xl:text-3xl'>Rahul</p>
        <div className='lg:flex max-lg:hidden items-center gap-x-14'>
            {navSections?.map((nav)=>{
                return(
                    <p 
                    className={selectedNav === nav?.id ? 
                        'text-red-400 font-semibold text-xl font-poppins border-b-2 border-red-400 py-1.5 cursor-pointer xl:text-2xl':
                        'text-white font-semibold text-xl font-poppins hover:text-red-400 cursor-pointer hover:border-b-2 py-1.5 border-b-2 border-transparent hover:border-red-400 xl:text-2xl'} 
                    key={nav?.id} onClick={()=>handleNavChange(nav?.id,nav?.route)}>{nav?.navHead}</p>
                )
            })}
            
        </div>
        <div className='max-lg:block lg:hidden text-white'>
            <MenuIcon height={24} width={24} className='cursor-pointer' onClick={()=>SetIsOpen(!isOpen)}/>
        </div>
      </div>
      <div className='w-4/5 mx-auto'>
        {isOpen ?
            <div className='w-full  mx-auto shadow-2xl border-white border-2 px-5 rounded-lg lg:hidden'>
                {navSections?.map((nav)=>{
            return(
                <p 
                className={selectedNav === nav?.id ? 
                    'text-red-400 font-semibold text-xl font-poppins border-b-2 border-red-400 py-1.5 cursor-pointer w-fit':
                    'text-white font-semibold text-xl font-poppins hover:text-red-400 cursor-pointer hover:border-b-2 py-1.5 border-b-2 border-transparent hover:border-red-400 '} 
                key={nav?.id} onClick={()=>handleNavChange(nav?.id,nav?.route)}>{nav?.navHead}</p>
            )
        })}
            </div>
        :''}
      </div>
    </div>
  )
}

