import React from 'react'

const Painel = ({users}) => {
  return (
    <div className='flex justify-center'>
     <table className='w-4/5 h-56 my-4 rounded-xl bg-sky-700'>
  <thead>
    <tr className=''>
      <th className='border-b border-gray-400 shadow-inner w-36 text-zinc-100 text-center'>Nome</th>
      <th className='hidden border-b border-gray-400 shadow-inner w-44 text-zinc-100 text-center md:table-cell'>Telefone</th>
      <th className='border-b border-gray-400 shadow-inner w-36 text-zinc-100 text-center'>Placa</th>
    </tr>
  </thead>
  <tbody>
    {users.map((item, i) => (
      <tr key={i}>
        <td className='border-b border-gray-400 shadow-inner text-center'>{item.nome}</td>
        <td className='hidden border-b border-gray-400 shadow-inner text-center md:table-cell'>{item.telefone}</td>
        <td className='border-b border-gray-400 shadow-inner text-center'>{item.placa}</td>
      </tr>
    ))}
  </tbody>
</table>


    </div>
  )
}

export default Painel