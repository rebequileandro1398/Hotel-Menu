import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from './Card'

export const Cards = () => {
    const getMenu = useSelector((state) => state.menu)
  return (
    <div>
        {
            getMenu > 1 ?
            getMenu.map(e => {
                <Card 
                name={e.title}
                image={e.image}
                desc='plato del dia'
                    />
            })
            : 
            <h1>loading...</h1>
        }
    </div>
  )
}
