import React from 'react'
import Campo from '../Campo'
import Botao from '../Botao'

const Formulario = () => {
  return (
    <form className='flex flex-col justify-around w-4/5 h-56 my-4 shadow-2xl md:flex-row rounded-xl bg-sky-700'>
        <Campo texto="Nome"/>
        <div className='hidden md:block'>
        <Campo texto="Telefone"/>
        </div>
        <Campo texto="Placa"/>
        <div className='flex items-center justify-center top-4'>
        <Botao/>
        </div>
    </form>
  )
}

export default Formulario