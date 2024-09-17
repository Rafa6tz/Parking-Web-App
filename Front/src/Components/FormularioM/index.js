import React, { useEffect, useRef } from 'react'
import Campo from '../Campo'
import Botao from '../Botao'
import axios from 'axios';

const Formulario = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef()

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.telefone.value = onEdit.telefone || "";
      user.cpf.value = onEdit.cpf;
      user.placa.value = onEdit.placa;
    }
  }, [onEdit])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;
    
    if(
      !user.placa.value
    ) {
      return console.log("Erro de não preenchimento")
    }

   const payload = {
      placa: user.placa.value
    };

    if (user.nome.value) {
      payload.nome = user.nome.value;
    }

    if (user.telefone.value) {
      payload.telefone = user.telefone.value;
    }

    if (user.cpf.value) {
      payload.cpf = user.cpf.value;
    }

    if (onEdit) {
      await axios
      .put("http://localhost:8800/mensalista/" + onEdit.id, {
        nome: user.nome.value,
        telefone: user.telefone.value,
        cpf: user.cpf.value,
        placa: user.placa.value,
      })
      .then(({ data }) => console.log(data))
      .catch(({ data }) => console.log(data))
    } else {
      await axios
      .post("http://localhost:8800/mensalista/", {
        nome: user.nome.value,
        telefone: user.telefone.value,
        cpf: user.cpf.value,
        placa: user.placa.value,
    })
    .then(({ data }) => console.log(data))
    .catch(({ data }) => console.log(data))
  }

      user.nome.value = "";
      user.telefone.value = "";
      user.cpf.value = "";
      user.placa.value = "";

      setOnEdit(null)
      getUsers()
  }

  return (
    <form ref={ref} onSubmit={handleSubmit} className='flex flex-col justify-around w-4/5 h-56 my-4 shadow-2xl md:flex-row rounded-xl bg-sky-700'>
        <Campo texto="Nome"/>
        <div className='hidden md:block'>
        <Campo className='hidden md:block' texto="Telefone"/>
        </div>
        <Campo texto="CPF"/>
        <Campo texto="Placa"/>
        <div className='flex items-center justify-center top-4'>
        <Botao/>
        </div>
    </form>
  )
}

export default Formulario