import { useState } from "react";

export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ( event ) => {
        setInputValue(event.target.value);
};
const onSubmit = (event) => {
    const envio = {
        nombre: inputValue,
        visto: false
    }
    event.preventDefault()
    agregarTarea(tareas =>[...tareas, envio]) // tareas =>[...tareas, <---- trae el array anterior para que no se borre la informacion
}
return (
    <>
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Ingresa Nueva Tarea"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
    </>
);
};
