import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"

const initialState = []

export const CarritoProvider = ({{children}}) => {

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    const agregarCompra = (compra) => {
        const action = {
            type: '[CARRITO] Agregar Compra',
            payload: compra
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad',
            payload: id
        }
        dispatch(action)
    }
    const eliminarCompra= (id) => {
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: id
        }
        dispatch(action)
    }

    const comprasReducer = (state = initialState, action = {}){
        switch (key) {
            case '[CARRITO] Agregar Compra':
                return [...state, action.payload]
                
            case '[CARRITO] Aumentar Cantidad':
                
                break;
            case '[CARRITO] Disminuir Cantidad':
                
                break;
            case '[CARRITO] Eliminar Compra':
                return state.filter(compra => compra.id !== action.payload)
        
            default:
                return state
        }
    }

  return (
    <CarritoContext.Provider>
        {children}
    </CarritoContext.Provider>
  )
}
