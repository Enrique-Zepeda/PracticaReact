import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"

const initialState = []

export const CarritoProvider = ({{children}}) => {

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    const agregarCompra = (compra) => {
        const action = {
            type: '',
            payload: compra
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: '',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: '',
            payload: id
        }
        dispatch(action)
    }
    const eliminarCompra= (id) => {
        const action = {
            type: '',
            payload: id
        }
        dispatch(action)
    }


  return (
    <CarritoContext.Provider>
        {children}
    </CarritoContext.Provider>
  )
}
