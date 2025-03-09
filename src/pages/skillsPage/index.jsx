import { CircularProgress } from '@heroui/react'
import React from 'react'
import { HTMLIcon } from '../../../public/htmlIcon'
import { CSSIcon } from '../../../public/cssIcon'
import { JSIcon } from '../../../public/jsIcon'
import { ReactIcon } from '../../../public/reactIcon'
import { TailWindIcon } from '../../../public/tailWindIcon'
import { TypeScriptIcon } from '../../../public/tsIcon'
import { NextJSIcon } from '../../../public/nextJsIcon'
import { MUIIcon } from '../../../public/muiIcon'
import {NodeJsIcon} from '../../../public/nodeJsIcon'
import { ExpressJsIcon } from '../../../public/expressJsIcon'
import { MongoDBIcon } from '../../../public/mongoDBIcon'
import { PostgreSqlIcon } from '../../../public/postgreSqlIcon'

export const SkillsPage = () => {
  const skillDatas =[
    {
      id:1,
      label: 'HTML',
      icon: <HTMLIcon className='xl:h-[150px] xl:w-[150px] lg:h-[125px] lg:w-[125px] md:h-[100px] md:w-[100px]'/>,
      value: 90,
      link:"https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id:2,
      label: 'CSS',
      icon: <CSSIcon className='xl:h-[150px] xl:w-[150px] lg:h-[125px] lg:w-[125px] md:h-[100px] md:w-[100px]'/>,
      value: 80,
      link:"https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id:3,
      label: 'JS',
      icon: <JSIcon className='xl:h-[150px] xl:w-[150px] lg:h-[125px] lg:w-[125px] md:h-[100px] md:w-[100px]'/>,
      value: 90,
      link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id:4,
      label: 'ReactJs',
      icon: <ReactIcon className='xl:h-[150px] xl:w-[150px] lg:h-[125px] lg:w-[125px] md:h-[100px] md:w-[100px]'/>,
      value: 90,
      link:"https://react.dev/learn",
    },
    {
      id:5,
      label: 'TailWind CSS',
      icon: <TailWindIcon className='xl:h-[150px] xl:w-[150px] lg:h-[125px] lg:w-[125px] md:h-[100px] md:w-[100px]'/>,
      value: 90,
      link:"https://tailwindcss.com/docs/",
    },
    {
      id:6,
      label: 'TS',
      icon: <TypeScriptIcon className='xl:h-[150px] xl:w-[150px] lg:h-[125px] lg:w-[125px] md:h-[100px] md:w-[100px]'/>,
      value: 80,
      link:"https://www.typescriptlang.org/docs/handbook/2/basic-types.html",
    },
    {
      id:7,
      label: 'NextJs',
      icon: <NextJSIcon className='xl:h-[150px] xl:w-[150px] lg:h-[125px] lg:w-[125px] md:h-[100px] md:w-[100px]'/>,
      value: 80,
      link:"https://nextjs.org/docs",
    },
    {
      id:8,
      label: 'Material UI',
      icon: <MUIIcon className='xl:h-[150px] xl:w-[150px] lg:h-[125px] lg:w-[125px] md:h-[100px] md:w-[100px]'/>,
      value: 60,
      link:"https://mui.com/material-ui/all-components/",
    },
    {
      id:9,
      label: 'NodeJs',
      icon: <NodeJsIcon className='xl:h-[150px] xl:w-[150px] lg:h-[125px] lg:w-[125px] md:h-[100px] md:w-[100px]'/>,
      value: 40,
      link:"https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
    },
    {
      id:10,
      label: 'ExpressJs',
      icon: <ExpressJsIcon className='xl:h-[150px] xl:w-[150px] lg:h-[125px] lg:w-[125px] md:h-[100px] md:w-[100px]'/>,
      value: 65,
      link:"https://expressjs.com/en/starter/installing.html",
    },
    {
      id:11,
      label: 'MongoDB',
      icon: <MongoDBIcon className='xl:h-[150px] xl:w-[150px] lg:h-[125px] lg:w-[125px] md:h-[100px] md:w-[100px]'/>,
      value: 50,
      link:"https://www.mongodb.com/docs/manual/",
    },
    {
      id:12,
      label: 'PostgreSql',
      icon: <PostgreSqlIcon className='xl:h-[150px] xl:w-[150px] lg:h-[125px] lg:w-[125px] md:h-[100px] md:w-[100px]'/>,
      value: 50,
      link:"https://www.postgresql.org/docs/",
    },

  ]
  return (
    <div className='flex items-center h-full flex-col mt-10 mx-auto w-4/5'>
      <p className='text-xl xl:text-2xl font-poppins text-white 2xl:text-5xl'>Skills</p>
      <div className='grid 2xl:grid-cols-4 gap-10 md:grid-cols-3 max-sm:grid-cols-2 3xl:grid-cols-5 w-full mx-auto mt-5'>
        {skillDatas?.map((skill)=>{
          return(
            <div key={skill?.id} onClick={()=>window?.open(skill?.link)} className='xl:h-[300px] xl:w-[300px] lg:h-[250px] lg:w-[250px] max-sm:h-[100px] max-sm:w-[100px] relative cursor-pointer w-fit'>
              <CircularProgress
              value={skill?.value}
              classNames={{
                svg:"h-full w-full",
                track:"stroke-white",
                indicator: skill?.value>50 ? "stroke-success" :"stroke-warning"
              }}
              />
              <div className='absolute h-full w-full top-0 flex items-center justify-center'>
                {skill?.icon}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

