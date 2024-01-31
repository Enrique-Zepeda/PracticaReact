import React from 'react'
import { useCallback } from 'react'
import { Incrementar } from './Incrementar'
import { useState } from 'react'

export const CallBack = () => {

    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback((val) => {
        setCounter(contador => contador +val)
    },[]
    )

  return (
    <>
    <h1>Contador:{counter}</h1>
    <Incrementar incrementar={incrementarPadre}></Incrementar>
    </>
  )
}
