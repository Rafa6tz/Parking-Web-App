import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='justify-between hidden p-2 shadow-sm shadow-black md:flex bg-sky-700'>
    <div className='flex justify-around flex-1 p-4 text-xl'>
        <NavLink to="/" className='font-bold transition duration-150 ease-in cursor-pointer text-slate-100 hover:text-2xl hover:text-sky-300'>Cadastro Rápido</NavLink>
        <NavLink to="Mensalistas" className='font-bold transition duration-150 ease-in cursor-pointer text-slate-100 hover:text-2xl'>Cadastro Mensalistas</NavLink>
        <NavLink to="Historico" className='font-bold transition duration-150 ease-in cursor-pointer text-slate-100 hover:text-2xl'>Histórico</NavLink>
    </div>
    <div className='flex p-4 mr-2 w-36'>
    <img className='object-cover w-8 h-8 rounded-full cursor-pointer' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNrznvusUpYqZSXMNP10SSyMu-UAI3axfPg&s' alt='teste'/>
        <span className='px-2 text-xl font-bold text-slate-100'>Mateus</span>
        </div>
</nav>
  )
}

export default Nav