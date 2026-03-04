import React from 'react'
const CardOutlineDemo = (props) => {
  return (
    <div className='flex sm:w-1/4 w-1/2 h-56 border-black border-2 p-8 rounded-md flex-col cursor-pointer hover:scale-105 duration:700 hover:bg-amber-50'>
        <h1 className='font-extrabold text-4xl'>{props.title}</h1>
        <p className='font-semibold text-2xl'>{props.content}</p>
    </div>
  )
}

export default CardOutlineDemo
