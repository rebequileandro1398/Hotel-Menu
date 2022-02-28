import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from './Card'
import foodError from '../../assets/food-error.jpg'
export const Cards = () => {
    const getMenu = useSelector((state) => state.menu)
  return (
    <div>
        {getMenu?.map(e => {
            return <div key={e.id}>
                    <Card 
                    id={e.id}
                    name={e.title}
                    image={e.image ? e.image : foodError}
                    desc={e.restaurantChain}
                        />
                </div>
        })}
    </div>
  )
}
