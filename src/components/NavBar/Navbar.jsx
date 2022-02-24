import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <h1 style={{color: '#fff'}}>Menu</h1>
                <form className="d-flex">
                    <input type="search" placeholder='Platos...' className="form-control me-2"/>
                    <button type="submit" className="btn btn-outline-light">Buscar</button>
                </form>
            </div>
        </div>
    )
}
