import React from 'react'

export const Card = ({name, image, desc}) => {
  return (
    <div>
        <h2>{name}</h2>
        <img src={image} alt="not found"/>
        <p>{desc}</p>
    </div>
  )
}
