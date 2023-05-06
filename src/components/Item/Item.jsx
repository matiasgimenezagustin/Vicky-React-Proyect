import './Item.css'
import React from 'react'
const Item = ({id, nombre, precio, img}) => {

  return (
  
    <div className='cards'>
        <img  className='imgProducto' src={img} alt={nombre}/>
        <h3>Nombre: {nombre}</h3>
        <p>Precio : {precio}</p>
        <p>ID: {id}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minima error iusto numquam laudantium. Deleniti exercitationem dolorem laborum perspiciatis obcaecati corrupti distinctio, tempore saepe, minus unde dolorum adipisci maxime eligendi!</p>
        <button className='botonDetalle'> Ver Detalles </button>
    </div>
    
    
  )
}

export default Item