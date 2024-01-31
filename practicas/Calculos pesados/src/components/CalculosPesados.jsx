import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'


export const CalculosPesados = () => {

    const getCalculo = (listaNumeros) => useMemo(() => {
        console.log("calculando")
        return listaNumeros.reduce((a,b) => a*b)
    },[listaNumeros])

    // useMemo(() => funcion, [dependencia])

    const [listaNumeros, setListaNumeros] = useState([1,2,3,4,5,6,7,8,9])
    const [show, setShow] = useState(true)

    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length-1] + 1])
        console.log(listaNumeros)
    }

  return (
    <>
    <h2>Calculo:</h2>
    <p>{getCalculo(listaNumeros)}</p>

    <button onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'}</button>
    <button onClick={() => agregarNumero()}>Agregar Numeros</button>
    </>
  )
}
