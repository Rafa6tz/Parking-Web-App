import React from 'react';

const Painel = ({ users }) => {
  return (
    <div className='flex justify-center'>
      <div className='w-4/5 flex justify-center rounded-xl bg-white'>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Painel;
