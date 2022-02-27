import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import food from '../../assets/food-black.png'



export const Login = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
         <img className={styles.image} src={food} alt=""/>
         <div className={styles.form}>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>E-mail</label>
                    <input className='form-control' type="email" name="" id="" placeholder='user@example.com' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input className='form-control' type="password" name="" id="" />
                </div>
                <button className='btn btn-dark'>iniciar sesion</button>
            </form>
         </div>
        </div>
    )
}
