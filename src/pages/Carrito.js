import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

const Carrito = () => {
    const { data, setData } = useContext(DataContext);
    const [total, setTotal] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isBuy, setIsBuy] = useState(false)
    const changeInputName = (e) => {
        setName(e.target.value)
    }

    const changeInputEmail = (e) => {
        setEmail(e.target.value)
    }

    const confirmBuy = (e) => {
        setIsBuy(true)
        setData({
            ...data, products: []
        })
    }

    useEffect(() => {
        let temp = 0;
        data.products.forEach((product) => {
        temp = temp + product.price * product.quantity;
        });
        setTotal(temp);
    }, []);

    return (
        <>

        {
            ! isBuy ? (
                <>
                <div>carrito</div>
                <table className="tabla">
                    <tr>
                    <td>Producto</td>
                    <td>Cantidad</td>
                    <td>Precio Unitario</td>
                    <td>Precio Total</td>
                    </tr>

                    {data.products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.description}</td>
                        <td>{product.quantity}</td>
                        <td>s/ {product.price}</td>
                        <td>s/ {product.quantity * product.price}</td>
                    </tr>
                    ))}

                    <tr>
                    <td colSpan={3}>Total</td>
                    <td>{total}</td>
                    </tr>
                </table>
                <br></br>
                <input value={name} onChange={(e) => changeInputName(e)} placeholder="ingresar nombre"></input>
                <br></br>
                <input value={email} onChange={(e) => changeInputEmail(e)} placeholder="ingresar email"></input>
                <br></br>

                <button onClick={() => confirmBuy()}>guardar</button>
                </>
            ) :
            (
                <h2>
                    Gracias por tu compra {name} se enviara el detalle de tu compra a {email}
                </h2>
            )
        }
        </>
    );
};

export default Carrito;
