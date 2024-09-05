import React from 'react'

const ClientCard = ({ item }) => {
  return (
    <div>
      <div className='Poppins w-[250px] h-[500px] flex relative'>
        {/* client Image */}
        <img src={item.img} alt="client" className='w-[100%] h-[100%] object-cover' />
        {/* client Name */}
        <div className='text-white absolute bottom-0 p-2 bg-[#0A6550] bg-opacity-90 w-full' >
          <div><span className='text-[20px] font-semibold'>{item.name}</span></div>
          <span className='text-[16px]' >{item.description}</span>
        </div>
      </div>
    </div>
  )
}

export default ClientCard