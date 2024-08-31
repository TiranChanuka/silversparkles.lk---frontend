import React from 'react'

const ClientCard = ({item}) => {
  return (
    <div>
      <div className='Poppins w-[250px] h-[500px] flex relative'>
        {/* client Image */}
        <img src={item.img} alt="client" className='w-[100%] h-[100%] object-cover' />
        {/* client Name */}
        <div className='text-white absolute bottom-0 p-[10px]'>
          <span className='text-[20px] '>{item.name}</span>
        </div>
      </div>
    </div>
  )
}

export default ClientCard