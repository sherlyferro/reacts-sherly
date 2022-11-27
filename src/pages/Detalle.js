import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import { DataContext } from "../context/DataContext";

const Detalle = () => {
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState(0);
    const onClickMinus = () => {
        if (quantity>0){
            setQuantity( quantity - 1)
        }
    }

    const onClickMinusmas = () => {
        setQuantity( quantity +1)
    }
    const { data, setData } = useContext(DataContext)

    const addCart= () => {
        console.log("data => ", data)
        let temp = data.products
        temp.push({...product, quantity: quantity})
        console.log("data => ", temp)
        setData({...data, products: temp})
    }

    let { id } = useParams();
    useEffect(() => {
        setProduct(api.products.find((x) => x.id == id));
    }, [product]);

    return (
        <main>
        <div className="container-fluid p-5 bg-primary text-white text-center">
            <h1>Detalle</h1>
            <p>Encuentra tus relojes a un super precio!</p>
        </div>
        {product != "" && (
            <div className="container mt-3 d-flex justify-content-center">
            <div className="card" style={{ width: "32rem" }}>
                <img src={product.img} className="card-img-top" />
                <div className="card-body">
                <h6 className="card-title">{product.name}</h6>
                <h6 className="card-title text-danger">
                    S/ {product.price.toFixed(2)}
                </h6>
                <p className="card_p__text">{product.description}</p>
                <div className="button_detalle">
                    <button onClick={()=>onClickMinus()}>-</button>
                    <p>{quantity}</p>
                    <button onClick={()=>onClickMinusmas()}>+</button>
                </div>
                <br></br>
                <button onClick={()=>addCart()}>Agregar al carrito</button>
                </div>
            </div>
            </div>
        )}
        </main>
    );
};

export default Detalle;
