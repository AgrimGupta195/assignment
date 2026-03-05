import React from 'react'
import { Link } from 'react-router-dom'
const CardOutlineDemo = (props) => {
  return (
<Link to={props.link} className="flex flex-col w-full sm:w-1/2 lg:w-1/4 h-56 border-black border-2 p-6 rounded-md cursor-pointer hover:scale-105 transition-all duration-700 hover:bg-amber-50 gap-4">       
     <h1 className='font-extrabold text-4xl'>{props.title}</h1>
        <p className='font-semibold text-xl'>{props.content}</p>
    </Link>
  )
}

export default CardOutlineDemo
