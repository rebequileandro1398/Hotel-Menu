import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { searchMenu } from '../../redux/Actions';
import order from '../../assets/order.png'
import food from '../../assets/food.png'
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(searchMenu(search))
    }
    const handleChange = e => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
        <div className="navbar navbar-dark bg-dark" style={{marginBottom:'1rem'}}>
            <div className="container-fluid">
                <Link to='/session/home'>
                    <img src={food} alt=""  style={{width:'2.5rem'}}/>
                </Link>
                <form className="d-flex" onSubmit={handleSubmit}>
                    <Link to='/session/order'>
                        <img src={order} alt=""  style={{width:'2.5rem', marginRight:'1rem'}}/>
                    </Link>
                    <input type="search" placeholder='Platos...' className="form-control me-2" onChange={handleChange}/>
                    <button type="submit" className="btn btn-outline-light" onClick={handleSubmit}>Buscar</button>
                </form>
            </div>
        </div>
    )
}
