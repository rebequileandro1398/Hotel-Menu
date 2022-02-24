import React from 'react'

export const Card = ({name, image, desc}) => {
  return (
    <div className='card mb-3' style={{width: "40rem"}}>
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={image} alt="not found" className='card-img-top'/>
            </div>
            <div className='col-md-8'>
                <div className='card-body'>
                    <h2 className='card-title'>{name}</h2>
                    <p className='card-text'>{desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
