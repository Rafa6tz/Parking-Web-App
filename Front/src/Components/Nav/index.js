import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [acc, setAcc] = useState(false);
  const openAcc = () => setAcc(!acc);

  return (
    <nav className='justify-between hidden p-2 shadow-sm shadow-black md:flex bg-sky-700 md:fixed md:w-full'>
      <div className='flex justify-around flex-1 p-4 text-xl'>
        <NavLink to="/" className='font-bold transition duration-150 ease-in cursor-pointer text-slate-100 hover:text-2xl hover:text-sky-300'>
          Cadastro Rápido
        </NavLink>
        <NavLink to="Mensalistas" className='font-bold transition duration-150 ease-in cursor-pointer text-slate-100 hover:text-2xl'>
          Cadastro Mensalistas
        </NavLink>
        <NavLink to="Historico" className='font-bold transition duration-150 ease-in cursor-pointer text-slate-100 hover:text-2xl'>
          Histórico
        </NavLink>
      </div>
      <div onClick={openAcc} className='flex p-4 mr-2 w-36 cursor-pointer'>
        <img className='object-cover w-8 h-8 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScNrznvusUpYqZSXMNP10SSyMu-UAI3axfPg&s' alt='perfil' />
        <span className='px-2 text-xl font-bold text-slate-100'>Mateus</span>
      </div>
      <div
        className={`fixed p-4 h-32 top-16 right-0 bg-slate-300 w-64 shadow-inner transform transition-transform ease-in-out duration-300 ${acc ? 'translate-y-0' : '-translate-y-40'}`}
      >
        {/* Conteúdo da última div */}
      </div>
    </nav>
  );
};

export default Nav;