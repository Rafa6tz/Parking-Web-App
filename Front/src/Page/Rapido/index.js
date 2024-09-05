import React, { useEffect, useState } from 'react';
import Formulario from '../../Components/Formulario';
import Painel from '../../Components/Painel';
import axios from 'axios';

const Rapido = () => {
  const [users, setUsers] = useState([]); 
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      console.error("Erro ao buscar usuários:", error); 
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <div className='md:pt-24'>
      <div className='flex flex-col items-center justify-center m-auto md:h-52'>
        <p className='m-4 text-3xl font-bold'>Cadastro Rápido</p>
        <Formulario onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
      </div>
      <Painel users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
    </div>
  );
};

export default Rapido;
