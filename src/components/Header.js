import React from 'react'
import BackButton from './BackButton'

export const Header = () => {
  return (

    <div className='headerContainer'>
      <BackButton />

      <div className='header'>
        <h2 className='h2'>
          مدیریت سرمایه
        </h2>
        <img src="./images/calculator.jpeg" alt="imgAlt" />
      </div>
    </div>
  )
}