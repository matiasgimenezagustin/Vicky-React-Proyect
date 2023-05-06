import React, { useEffect, useState } from 'react'

const ItemCount = () => {
    let inicial = 1;
    let maximo = 10;
    const [contador, setContador] = useState(inicial);

    useEffect(() => {
        console.log("Se modifico la cantidad")
    }, [contador] );

    const sumar = () => {
        if(contador < maximo){
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }

    const agregarCarrito = () => {
         console.log(`Agregado ${contador} items`)
    }

    return (
    <>
        <button onClick={ sumar }>+</button>
        <p>{contador}</p>
        <button onClick={ restar }>-</button>
        <button onClick={ agregarCarrito }>Agregar al carrito</button>
    </>
    )
}

export default ItemCount