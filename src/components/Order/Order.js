import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../Cards/Card'

export const Order = () => {
    const getOrder = useSelector(state => state.order)
  return (
    <div>
        {
            getOrder?.map(e => {
                return <div key={e.id}>
                <Card 
                btn={true}
                id={e.id}
                name={e.title}
                image={e.image}
                desc={e.restaurantChain}
                    />
            </div>
            })
        }
    </div>
  )
}
