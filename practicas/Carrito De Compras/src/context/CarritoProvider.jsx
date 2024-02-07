import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

const comprasReducer = (state, action) => {
    switch (action.type) {
        case '[CARRITO] Agregar Compra':
            return [...state, action.payload];

        case '[CARRITO] Aumentar Cantidad':
            // Logic for increasing quantity
            break;
        case '[CARRITO] Disminuir Cantidad':
            // Logic for decreasing quantity
            break;
        case '[CARRITO] Eliminar Compra':
            return state.filter(compra => compra.id !== action.payload);

        default:
            return state;
    }
};

export const CarritoProvider = ({children}) => {
    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

    const agregarCompra = compra => {
        dispatch({ type: '[CARRITO] Agregar Compra', payload: compra });
    };

    const aumentarCantidad = id => {
        dispatch({ type: '[CARRITO] Aumentar Cantidad', payload: id });
    };

    const disminuirCantidad = id => {
        dispatch({ type: '[CARRITO] Disminuir Cantidad', payload: id });
    };

    const eliminarCompra = id => {
        dispatch({ type: '[CARRITO] Eliminar Compra', payload: id });
    };

    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    );
};
