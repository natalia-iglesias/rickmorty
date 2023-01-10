import React from "react";
import { useState } from "react"

export default function SearchBar ({onSearch}) {
  
    const [character, setCharacters] = useState("")

    const handleInputChange = (e) => {
       e.preventDefault();
        setCharacters(e.target.value)
    }
    return (
        <form onSubmit = {(e) => {
            e.preventDefault();
            onSearch(character);
            setCharacters("");
        }}>
            <input 
            type="text"
             placeholder='Buscar'
             value={character}
             onChange={handleInputChange}
           />
          <input 
           type="submit"
           value="Agregar"
            />
        </form>
    )
}