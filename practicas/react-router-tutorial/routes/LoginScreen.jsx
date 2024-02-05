import React, { useContext, useState } from 'react'
import { UseForm } from '../hooks/useForm'
import { UserContext } from '../context/UserContext'


export const LoginScreen = () => {

 

  const initialForm = {
    nombre: '',
    tecnologia:'',
    email: ''
  }
  const {formState, nombre, tecnologia, email, onInputChange} = UseForm(initialForm)
  const { setUsuario } = useContext( UserContext )

  const onSubmit = (e) => {
    e.preventDefault()
    setUsuario(formState)
  }

  return (
    <>
        <form className='container' onSubmit={onSubmit}>
  <div className="mb-3">
    <label htmlFor="nombre" className="form-label">Nombre</label>
    <input type="text" className="form-control" name="nombre" value={nombre} onChange={onInputChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" name="email" value={email} onChange={onInputChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tecnologia" className="form-label">Tecnologia</label>
    <input type="text" className="form-control" name="tecnologia" value={tecnologia} onChange={onInputChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Registrar Usuario</button>
</form>
    </>
  )
}
