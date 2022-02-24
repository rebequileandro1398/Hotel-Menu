import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from './Card'

export const Cards = () => {
    const getMenu = useSelector((state) => state.menu)
    console.log(getMenu)
  return (
    <div>
        {getMenu?.map(e => {
            return <div key={e.id}>
                    <Card 
                    name={e.title}
                    image={e.image}
                    desc={e.restaurantChain}
                        />
                </div>
        })}
    </div>
  )
}
