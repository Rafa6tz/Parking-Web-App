import React, { useEffect, useRef } from 'react'
import Campo from '../Campo'
import Botao from '../Botao'

const Formulario = ({ onEdit }) => {
  const ref = useRef()

  useEffect(() => {
    if (onEdit) {
      const user = ref.current

      user.nome.value = onEdit.nome;
      user.telefone.value = onEdit.telefone;
      user.placa.value = onEdit.placa;
    }
  }, [onEdit])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(
      !user.nome.value ||
      !user.telefone.value ||
      !user.placa.value
    ) {
      return console.log("Erro de não preenchimento")
    }
  }

  return (
    <form ref={ref} onSubmit={handleSubmit} className='flex flex-col justify-around w-4/5 h-56 my-4 shadow-2xl md:flex-row rounded-xl bg-sky-700'>
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