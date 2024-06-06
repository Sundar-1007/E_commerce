import React from 'react'

export const CategoryBar = ({imageSrc, category}) => {
  return (
    <div>
        <img src={imageSrc} className='categoryImg' alt={imageSrc} />
        <p>{category}</p>
    </div>
  )
}
