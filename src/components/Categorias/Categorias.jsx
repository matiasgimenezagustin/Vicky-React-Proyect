import React, { useEffect, useState } from 'react'

const Categorias = () => {
    const [categoria, setCategoria] = useState("");
    
    useEffect( () => {
        document.title = `Categoria ${categoria}`;
    }, [categoria]);
    
    const handleClick = (categoria) => {
        setCategoria(categoria);
    }
  return (
    <div>
        <h2>Categorias</h2>
        <button onClick={ () => handleClick('Plantacion y cuidados')}>Plantacion y cuidados</button>
        <button onClick={ () => handleClick('Tierras')}>Tierras</button>
        <button onClick={ () => handleClick('Para fumadores')} >Para fumadores</button>
        <button onClick={ () => handleClick('Semillas')}>Semillas</button>
    </div>
  )
}

export default Categorias