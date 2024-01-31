import { useReducer } from "react"
import { UseForm } from "../hooks/useForm"

const initialState = [{
    id: new Date().getTime(),
    tarea: 'Explicar Reducers',
    finalizada: false
}]

const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar tareas':
            return [...state, action.payload]
        case '[TAREAS] Finalizar tareas':
            console.log('Finalizar')
            return state.map(tarea => {
                if(tarea.id === action.payload){
                    return{
                        ...tarea,
                        finalizada: !tarea.finalizada
                    }
                } return tarea
            })
        case '[TAREAS] Eliminar tareas':
            console.log('Eliminar')
            return state.filter(tarea => tarea.id !== action.payload)
        case '[TAREAS] Borrar tareas':
            console.log('Borrar todo')
            return []
        default:
            return state
    }
}


// console.log(tareaReducer(initialState, agregarTarea))

export const ListaTareas = () => {

    const [tareasState, dispatch] = useReducer(tareaReducer, initialState)

    const {tarea,formState,onInputChange} = UseForm({tarea: ''})
    const agregarTarea = (event) => {
        if(formState.tarea == '') return
        event.preventDefault()
        console.log(formState)
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] Agregar tareas',
            payload: tarea
        }
        dispatch(action)
    }

    const finalizarTarea = ({id}) => {
    //    console.log(id);
    //    console.log(finalizada);
    //    console.log(tarea);
        const action = {
            type: '[TAREAS] Finalizar tareas',
            payload: id
        }
        dispatch(action)
    }

    const eliminarTarea = ({id}) => {
        const action = {
            type: '[TAREAS] Eliminar tareas',
            payload: id
        }
        dispatch(action)
    }

    const reset = () => {
        const action = {
            type: '[TAREAS] Borrar tareas',
            payload: ''
        }
        dispatch(action)
    }

  return (
    <>
    <form onSubmit={agregarTarea}>
        <div className="form-grop">
            <input 
            type="text" 
            className='form-control'
            name="tarea" 
            placeholder="Ingresa Tarea" 
            value={tarea}
            onChange={onInputChange}
            />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>
    </form>
    <hr />
    <ul className="list-group">
        {tareasState.map(item => {
            return(
                <li className="list-group-item d-flex justify-content-between" key={item.id}>
                    <span>{item.tarea}</span>
                    <div>
                    <input type="checkbox" 
                    value={item.finalizada}
                    onChange={() => finalizarTarea(item)}
                    />
                    <button 
                    className="btn btn-danger"
                    onClick={() => eliminarTarea(item)}
                    >
                        borrar
                        </button>
                    </div>
                    </li>
            )
        })}
    </ul>
    </>
  )
}
