import { useState } from "react"

export const Buscador = () => {

  const urlBase = 'https://pokeapi.co/api/v2/pokemon/'

  const [buscar, setBuscar] = useState('')
  const [poekmon, setPokemon] = useState([])

  const handleInputChange = async (e) => {
    setBuscar(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    fetchPokemon()
  }

  const fetchPokemon = async () => {
    try{
      const response = await fetch(`${urlBase}${buscar}`)
      const data = await response.json()
      setPokemon(data)
      console.log(data)
    }catch(error){
      console.error("Ha ocurrido un error", error)
    }
  }

  return (
    <>
    <form onSubmit={handleOnSubmit}>
      <input 
      type="text" 
      placeholder="Buscar Pokemon" 
      value={buscar}
      onChange={handleInputChange}
      />
      <button type="submit">Buscar</button>
    </form>
    </>
  )
}
