import { useEffect, useState } from "react"
import { obtenerUnProducto } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    useEffect( () => {
        obtenerUnProducto(1)
        .then(res => setProducto(res))
    }, [])

  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer