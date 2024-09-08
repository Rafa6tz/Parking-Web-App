import React from 'react'

const Campo = ({ texto }) => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
    <label className='text-xl font-bold text-slate-100 md:text-base'>{texto}</label>
    <input name={texto.toLowerCase()} className='h-6 border-none rounded-md outline-none w-46 border-slate-500 md:w-32 lg:w-44'></input>
    </div>
  )
}

export default Campo