import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LayoutPage } from '../layout'
import { AboutMe,ContactPage,HomePage,ProjectsPage,SkillsPage } from '../pages'
export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LayoutPage/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/about-me' element={<AboutMe/>}/>
                <Route path='/skills' element={<SkillsPage/>}/>
                <Route path='/projects' element={<ProjectsPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

