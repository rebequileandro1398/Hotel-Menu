import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import food from '../../assets/food-black.png'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/Actions'



export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        email: "",
        password: ""
      })

    const handleInputChange = (e, type) => {
        setInput({
          ...input,
          [type]: e.target.value,
        });
      };

    const handleSubmmit = (e) => {
        e.preventDefault()
        dispatch(login(input))
    }

    return (
        <div className={styles.container}>
         <img className={styles.image} src={food} alt=""/>
         <div className={styles.form}>
            <form onSubmit={(e) => handleSubmmit(e)}>
                <div className='mb-3'>
                    <label className='form-label'>E-mail</label>
                    <input 
                        className='form-control' 
                        type="email" 
                        placeholder='user@example.com' 
                        value={input.email}
                        onChange={(e)=> handleInputChange(e, 'email')}/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input 
                        className='form-control' 
                        type="password" 
                        value={input.password}
                        onChange={(e)=> handleInputChange(e, 'password')}/>
                </div>
                <button className='btn btn-dark'>iniciar sesion</button>
            </form>
         </div>
        </div>
    )
}
