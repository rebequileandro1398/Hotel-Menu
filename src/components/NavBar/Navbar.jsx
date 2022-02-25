import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { searchMenu } from '../../redux/Actions';

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
                <h1 style={{color: '#fff'}}>Menu</h1>
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input type="search" placeholder='Platos...' className="form-control me-2" onChange={handleChange}/>
                    <button type="submit" className="btn btn-outline-light" onClick={handleSubmit}>Buscar</button>
                </form>
            </div>
        </div>
    )
}
