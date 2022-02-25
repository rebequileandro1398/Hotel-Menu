import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, remove } from '../../redux/Actions'



export const Card = ({name, image, desc, id, btn}) => {
   const dispatch = useDispatch()
   const [isTrue, setIsTrue] = useState(false)

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
        <div style={{alignSelf: 'flex-end', margin: '1rem'}}>
            {
                btn ? <button className='btn btn-outline-dark' onClick={()=> dispatch(remove(id), setIsTrue(false))}>x</button>
                :
                <button className={isTrue ? "btn btn-outline-success" : 'btn btn-outline-dark'} onClick={()=> dispatch(add(id), setIsTrue(true))}>{isTrue ? '✓' : '+'}</button>
            }
        </div>
    </div>
  )
}
