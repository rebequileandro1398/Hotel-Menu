import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, remove } from '../../redux/Actions'
import swal from 'sweetalert';


export const Card = ({name, image, desc, id, btn}) => {
   const dispatch = useDispatch()
   const [isTrue, setIsTrue] = useState(false)
   
   const check = (action, state, title, text, icon) => {
    swal({
        title: title,
        text: text,
        icon: icon,
        buttons: ['No', 'Si'],
      }).then(res => {
          if(res) dispatch(action) && setIsTrue(state)
      })
   }

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
                btn ? <button className='btn btn-outline-dark' onClick={()=> check(remove(id), false, 'Eliminar', '¿Quieres eliminar este plato de tu pedido?', 'warning')}>x</button>
                :
                <button 
                    className={isTrue ? "btn btn-outline-success" : 'btn btn-outline-dark'} 
                    onClick={()=> check(add(id), true, 'Agregar', '¿Quieres agregar este plato a tu pedido? ', 'info')}>
                    {isTrue ? '✓' : '+'}
                </button>
            }
        </div>
    </div>
  )
}
