import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getMenu from '../../redux/Actions'
import { Cards } from '../Cards/Cards'

export const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getMenu())}, [dispatch])
    return (
        <div>
            <Cards/>
        </div>
    )
}
