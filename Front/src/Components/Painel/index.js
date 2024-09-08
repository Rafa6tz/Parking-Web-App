import axios from 'axios';
import React from 'react';
import { FaPen, FaTrash, FaReceipt, FaTicketAlt } from 'react-icons/fa'


const Painel = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item)
  }


  const handleDelete = async (id) => {
    await axios
    .delete("http://localhost:8800/" + id)
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
                <td className='p-4 text-center'>{item.placa}</td>
                <div className='h-full flex-row justify-around w-full items-center hidden md:flex'>
                <FaPen className='cursor-pointer mx-1' onClick={() => handleEdit(item)} />
                <FaReceipt className='cursor-pointer mx-1' />
                <FaTrash className='cursor-pointer mx-1 text-red-700' onClick={() => handleDelete(item.id)}/>
                </div>
                <div className='h-full flex-row justify-around w-full items-center md:hidden flex'>
                <FaTicketAlt className='cursor-pointer' />
                </div>
              </tr>
             ))}
          </tbody>
          </table>

      </div>
    </div>
  );
};

export default Painel;
