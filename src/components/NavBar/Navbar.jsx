import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { searchMenu } from '../../redux/Actions';
import order from '../../assets/order.png'
import food from '../../assets/food.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Bubble.module.css'
import timer from '../../assets/timer.png'
import exit from '../../assets/exit.png'
import { LogOut } from '../Login/LogOut';
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
                <div>
                    <button onClick={LogOut()} style={{marginRight:'1rem', backgroundColor: 'transparent', border: 'none'}}>
                        <img src={exit} alt="exit" style={{width:'2rem'}}/>
                    </button>
                    <Link to='/session/home'>
                        <img src={food} alt=""  style={{width:'2.5rem'}}/>
                    </Link>
                </div>
                <form className="d-flex" onSubmit={handleSubmit}>
                    <img src={timer} alt=""  style={{width:'2.6rem', marginRight:'1rem'}}/>
                    <div className='d-flex flex-row'>
                        <Link to='/session/order'>
                            <img src={order} alt=""  style={{width:'2.5rem', marginRight:'1rem'}}/>
                        </Link>
                        {
                            number.length > 0 &&
                            <div className={styles.bubble}>
                                <p style={{fontSize: '0.6rem', color: '#fff'}}>{number.length}</p>
                            </div>
                        }
                    </div>
                    <input type="search" placeholder='Platos...' className="form-control me-2" onChange={handleChange}/>
                    <button type="submit" className="btn btn-outline-light" onClick={handleSubmit}>Buscar</button>
                </form>
            </div>
        </div>
    )
}
