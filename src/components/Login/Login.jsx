import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import food from '../../assets/food-black.png'
import axios from 'axios'
import swal from 'sweetalert'

export const Login = () => {
    const navigate = useNavigate()
    const [load, setLoad] = useState(false)
    const [input, setInput] = useState({
        email: "",
        password: ""
      })
    const getToken = localStorage.getItem('tokenHM')
    useEffect(() => {
        setLoad(true)
        getToken ? check()
        :
        setLoad(false)
      }, [])

    const handleInputChange = (e, type) => {
        setInput({
          ...input,
          [type]: e.target.value,
        });
      };

    const handleSubmmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`http://challenge-react.alkemy.org/`, input) 
            console.log(res)
            if(res.status === 200) {
                 localStorage.setItem('tokenHM', res.data.token);
                 setLoad(true);
                 check();
            }
        } catch (error) {
            swal({
                title: 'Lo sentimos ',
                text: 'No se pudo iniciar sesión inténtelo más tarde',
                icon: 'error',
            })
        }
    }
    const check = () => {
        setTimeout(() => {
            navigate('/session/home', { replace: true })
        }, 3000);
    }

    return (
        <div className={styles.container}>
            {
                load ?
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                :
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
            }
        </div>
    )
}
