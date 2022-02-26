import React from 'react'
import { useSelector } from 'react-redux'
import foodError from '../../assets/food-error.jpg'
export const Details = () => {
    const detailsItem = useSelector(state => state.details)
    console.log(detailsItem)
  return (
    <div>
        {   detailsItem.length !== 0 ?
                <div className="card mb-3">
                    <h1>{detailsItem.title}</h1>
                    <img src={detailsItem.images[2]} className="card-img-top" alt="food"/>
                </div>
            :
            <img src={foodError} alt='404 food no found'/>
        }
    </div>
  )
}
