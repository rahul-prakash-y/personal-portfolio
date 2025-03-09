import React from 'react'
import {HomePage,AboutMe,ContactPage,ProjectsPage,SkillsPage} from '../../pages'
export const PortfolioPage = ({tab}) => {
    const tabs=[ <HomePage /> ,<AboutMe/>,<SkillsPage/>,<ProjectsPage/>,<ContactPage/> ]
  return (
    <div className=''>
      {tabs[tab]}

    </div>
  )
}

