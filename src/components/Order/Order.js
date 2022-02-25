import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../Cards/Card'
import noOrder from '../../assets/no-order.png'
export const Order = () => {
    const getOrder = useSelector(state => state.order)
  return (
    <div>
        {   getOrder.length !==0 ?
            getOrder.map(e => {
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
            :
            <div>
                <img src={noOrder} alt='' style={{width:"30rem", opacity: '0.4'}}/>
                <h1 style={{opacity: '0.4'}}>no tienes ningun pediodo</h1>
            </div>
        }
    </div>
  )
}
