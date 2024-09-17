import axios from 'axios';
import React, { useState } from 'react';
import { FaPen, FaTrash, FaReceipt, FaTicketAlt } from 'react-icons/fa'


const Painel = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item)
  }

  
  const [mobmodal, setMobmodal ] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const openMobmodal = (item) => { 
    setSelectedItem(item)
    setMobmodal(!mobmodal)}


  const handleDelete = async (id) => {
    await axios
    .delete("http://localhost:8800/mensalista/" + id)
    .then(({data}) => {
      const newArray = users.filter((user) => user.id !== id)

      setUsers(newArray)
      console.log(data)
    })
    .catch(({data}) => console.log(data))

    setOnEdit(null)
  }

  return (
    <div className='flex justify-center'>
      <div className='w-4/5 flex justify-center rounded-xl bg-white shadow-2xl'>
        <table className='w-4/5 h-56 my-4 bg-white border-collapse'>
          <thead>
            <tr>
              <th className='p-4 border-b border-gray-300 text-center'>Nome</th>
              <th className='p-4 hidden border-b border-gray-300 text-center md:table-cell'>Telefone</th>
              <th className='p-4 border-b border-gray-300 text-center'>Placa</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, i) => (
              <tr key={i}>
                <td className='p-4 text-center'>{item.nome}</td>
                <td className='p-4 hidden text-center md:table-cell'>{item.telefone}</td>
                <td className='p-4 text-center'>{item.cpf}</td>
                <td className='p-4 text-center'>{item.placa}</td>
                <div className='h-full flex-row justify-around w-full items-center hidden md:flex'>
                <FaPen className='cursor-pointer mx-1' onClick={() => handleEdit(item)} />
                <FaReceipt className='cursor-pointer mx-1' />
                <FaTrash className='cursor-pointer mx-1 text-red-700' onClick={() => handleDelete(item.id)}/>
                </div>
                <div className='h-full flex-row justify-around w-full items-center md:hidden flex'>
                <FaTicketAlt onClick={() => openMobmodal(item)} className='cursor-pointer' />
                </div>
              </tr>
              
             ))}
             
          </tbody>
          </table>
          </div>
          {mobmodal && (<div className={`${mobmodal ? 'block' : 'hidden'}`}> 
                 {selectedItem && (
                  <div className='w-screen h-screen absolute top-0 left-0 z-10 flex justify-center items-center'>
                    <div className='z-10 w-11/12 absolute h-56 flex flex-col items-center justify-around bg-white'>
                    <div className='flex justify-center items-center' onClick={() => {handleEdit(selectedItem); openMobmodal(false)}} > 
                    <FaPen className='cursor-pointer mx-2'/>
                    <p>EDITAR</p>
                    </div>
                    <div className='flex justify-center items-center'> 
                    <FaReceipt className='cursor-pointer mx-1' />
                    <p>PAGAR</p>
                    </div>
                    <div className='flex justify-center items-center' onClick={() => {handleDelete(selectedItem.id); openMobmodal(false)}}> 
                    <FaTrash className='cursor-pointer mx-1 text-red-700' />
                    <p>DELETAR</p>
                    </div>
                    
                    </div>
                    <div onClick={openMobmodal} className='h-screen w-screen left-0 top-0'></div>
                    </div>
                  )} 
                  </div>)}
    </div>
  );
};

export default Painel;
