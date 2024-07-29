import React from 'react'
import './Card.css'

export const Card = ({name}) => {
  return (
    <div>
        <div className='Card'>
            <div className='Image'>
                <img src='' alt='' />
            </div>

            <div className='Description'>
                <h1 className='Name'>{name}</h1>
                <h2 className='Skills'>Skills</h2>
            </div>
        </div>
      
    </div>
  )
}

