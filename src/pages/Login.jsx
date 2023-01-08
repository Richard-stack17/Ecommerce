import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const {handleSubmit, register,reset} =  useForm()
  const [isLogged, setIsLogged] = useState(false)
  const submit = data => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {
        console.log(res.data.data)
        localStorage.setItem('token',res.data.data.token)
        setIsLogged(true) 
        navigate('/')
      })
      .catch(err => console.log(err))
      reset({
        email:"",
        password:""
      })
    
  }
  useEffect(() => {
    const condition = localStorage.getItem('token') ? true : false
    setIsLogged(condition)
  },[])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }
  if(isLogged){
    return (
      <div className='login login__after'>
        <h1 className='login__success'>User Logged 😉</h1>
        <img className='login__img' src='https://img.freepik.com/vector-premium/lindo-gato-trabajando-portatil-escribiendo-papel-ilustracion-icono-dibujos-animados_138676-2267.jpg?w=2000'/>
        <button className='login__btn' onClick={handleLogout}>Logout</button>  
      </div>
    )
  }
  return (
    <div className='login login__before'>
        <p className='login__initial'>Please enter the indicated data to be able to enter </p>
        <form className='login__form' onSubmit={handleSubmit(submit)}>
            <div className='login__email'>
                <label className='login__label' htmlFor="email">Email</label>
                <input className='login__input' type="text" id='email' {...register("email")}/>
            </div>
            <div className='login__pass'>
                <label className='login__label' htmlFor="password">Password</label>
                <input className='login__input' type="password" id='password' {...register("password")}/>
            </div>
            <button className='login__btn'>Login</button>
        </form>
    </div>
  )
}

export default Login