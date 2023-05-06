import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contendorItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minima error iusto numquam laudantium. Deleniti exercitationem dolorem laborum perspiciatis obcaecati corrupti distinctio, tempore saepe, minus unde dolorum adipisci maxime eligendi!</p>
        <img src= {img} alt= {nombre}/>
    </div>
  )
}

export default ItemDetail