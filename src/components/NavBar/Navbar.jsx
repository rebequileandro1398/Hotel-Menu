import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { searchMenu } from '../../redux/Actions';
import order from '../../assets/order.png'
import food from '../../assets/food.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const Navbar = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const number = useSelector(state => state.order)

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
                    <div>
                        <Link to='/session/order'>
                            <img src={order} alt=""  style={{width:'2.5rem', marginRight:'1rem'}}/>
                        </Link>
                        {
                            number.length > 0 ?
                            <div style={{
                                backgroundColor: '#CB0F0F', 
                                width: '1rem', height: '1rem', 
                                borderRadius: '1rem', 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignContent: 'center', 
                                position: 'absolute', 
                                marginTop: "-0.8rem"}}>
                                <p style={{fontSize: '0.6rem', color: '#fff'}}>{number.length}</p>
                            </div>
                            : null
                        }
                        
                    </div>
                    <input type="search" placeholder='Platos...' className="form-control me-2" onChange={handleChange}/>
                    <button type="submit" className="btn btn-outline-light" onClick={handleSubmit}>Buscar</button>
                </form>
            </div>
        </div>
    )
}
