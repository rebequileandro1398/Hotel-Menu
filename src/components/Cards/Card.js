import React from 'react'
import { useDispatch } from 'react-redux'
import { add, remove } from '../../redux/Actions'



export const Card = ({name, image, desc, id, btn}) => {
   const dispatch = useDispatch()


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
                btn ? <button className='btn btn-outline-dark' onClick={()=> dispatch(remove(id))}>x</button>
                :
                <button className='btn btn-outline-dark' onClick={()=> dispatch(add(id))}>+</button>
            }
        </div>
    </div>
  )
}
