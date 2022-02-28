import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getMenu from '../../redux/Actions'
import { Cards } from '../Cards/Cards'
import { getMenuVegan } from '../../redux/Actions'

export const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => { 
        dispatch(getMenu())
    }, [dispatch])
    useEffect(() => { 
        dispatch(getMenuVegan())
    }, [dispatch])
    return (
        <div>
            <Cards/>
        </div>
    )
}
