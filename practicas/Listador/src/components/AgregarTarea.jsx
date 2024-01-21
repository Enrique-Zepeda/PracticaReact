import { useState } from "react";

export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ( event ) => {
        setInputValue(event.target.value);
};
const onSubmit = (event) => {
    event.preventDefault()
    agregarTarea(inputValue) // tareas =>[...tareas, <---- trae el array anterior para que no se borre la informacion
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
