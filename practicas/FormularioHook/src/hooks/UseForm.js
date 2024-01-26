import { useState } from "react"

export const UseForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
        console.log(target.name)
        console.log(target.value)
    }

  return {
    ...formState,
    formState,
    onInputChange
  }
}
