import React from 'react'
import Formulario from '../../Components/Formulario'

const Rapido = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center m-auto md:h-52'>
      <p className='m-4 text-3xl font-bold'>Cadastro Rápido</p>
        <Formulario/>
    </div>
    <div className='flex justify-center'>
      <table className='flex flex-col justify-around w-4/5 h-56 my-4 md:flex-row rounded-xl bg-sky-700'>
        <thead>
          <tr className='flex justify-center md:justify-between'>
            <th className='border-b border-gray-400 shadow-inner w-36 text-zinc-100'>Nome</th>
            <th className='hidden border-b border-gray-400 shadow-inner w-44 text-zinc-100 md:block'>Telefone</th>
            <th className='border-b border-gray-400 shadow-inner w-36 text-zinc-100'>Placa</th>
          </tr>
        </thead>
      </table>
    </div>
    </>
  )
}

export default Rapido