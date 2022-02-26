import React from 'react'
import { useSelector } from 'react-redux'
import foodError from '../../assets/food-error.jpg'
export const Details = () => {
    const detailsItem = useSelector(state => state.details)
    console.log(detailsItem)
  return (
    <div>
        {   detailsItem.length !== 0 ?
                <div className="card bg-dark text-white" style={{width: '40rem'}}>
                    <img style={{opacity: '0.5'}} src={detailsItem.images[2]} className="card-img" alt="food"/>
                    <div className='card-img-overlay'>
                    <h1 className='card-title'>{detailsItem.title}</h1>
                        <h3>Información nutricional</h3>
                        <h6>Calorías: {detailsItem.nutrition.calories}</h6>
                        <h6>Grasas totales: {detailsItem.nutrition.fat}</h6>
                        <h6>Proteínas: {detailsItem.nutrition.protein}</h6>
                        <h6>Carbohidratos: {detailsItem.nutrition.carbs}</h6>
                    </div>
                </div>
            :
            <img src={foodError} alt='404 food no found'/>
        }
    </div>
  )
}
