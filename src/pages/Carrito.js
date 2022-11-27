import React, {useContext, useEffect, useState} from "react";
import { DataContext } from "../context/DataContext";

const Carrito = () => {
    const { data } = useContext(DataContext)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let temp = 0
        data.products.forEach(product => {  
            temp = temp + (product.price * product.quantity)
        })
        setTotal(temp)
    },[])
    return (
        <>
        <div>carrito</div>
        <table className="tabla">
            <tr>
            <td>Producto</td>
            <td>Cantidad</td>
            <td>Precio Unitario</td>
            <td>Precio Total</td>
            </tr>
            
            {
                data.products.map( product => 
                    <tr key={product.id}>
                        <td>{product.description}</td>
                        <td>{product.quantity}</td>
                        <td>s/ {product.price}</td>
                        <td>s/ {product.quantity * product.price}</td>
                    </tr>
                )
            }

            <tr>
            <td colSpan={3}>Total</td>
            <td>{total}</td>
            </tr>

                
        </table>
        </>
    );
};

export default Carrito;
