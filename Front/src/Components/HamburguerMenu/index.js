import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom'

const HamburgerMenu1 = () => {
const [aberto, setAberto] = useState(false);

const abrirMenu = () => setAberto(!aberto)

  return (
    <div className='relative block sm:hidden'> 
      <button className='p-4 fixed' onClick={abrirMenu}>{aberto ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}</button>
    
    <div className={`p-4 fixed h-full top-0 left-0 bg-slate-300 w-64 shadow-inner transform transition-transform ease-in ${aberto ? 'translate-x-0' : '-translate-x-full'}`}>
    <div className='flex justify-start'>
    <button onClick={abrirMenu}><AiOutlineClose size={32} /> </button>
    </div>
    <div className='flex flex-col my-4'>
        <NavLink onClick={abrirMenu} to="/" className='py-4 font-bold transition duration-150 ease-in cursor-pointer hover:text-slate-100 hover:text-2xl'>Cadastro Rápido</NavLink>
        <NavLink onClick={abrirMenu} to="Mensalistas" className='py-4 font-bold transition duration-150 ease-in cursor-pointer hover:text-slate-100 hover:text-2xl'>Cadastro Mensalistas</NavLink>
        <NavLink onClick={abrirMenu} to="Historico" className='py-4 font-bold transition duration-150 ease-in cursor-pointer hover:text-slate-100 hover:text-2xl'>Histórico</NavLink>
        </div>
    </div>
    
    </div>
  )
}

export default HamburgerMenu1