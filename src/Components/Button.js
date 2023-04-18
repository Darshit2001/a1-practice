import React from 'react'

function Button({name}) {
  return (
    <>
    <button className='px-5 py-2 m-2 bg-gray-200 rounded-2xl'>{name}</button>
    </>
  )
}

export default Button;