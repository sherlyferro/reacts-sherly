import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import api from '../api';

const Detalle = () => {
    const [product, setProduct] = useState("")
    let { id } = useParams();
    useEffect(() => {
        setProduct(api.products.find( x => x.id == id))
    }, [product])

    return (
        <main>
            <div className="container-fluid p-5 bg-primary text-white text-center">
                <h1>Detalle</h1>
                <p>Encuentra tus relojes a un super precio!</p>
            </div>
            {
                product != "" && (
                    <div className="container mt-3 d-flex justify-content-center">
                <div className="card" style={{ width: '32rem' }}>
                    <img src={product.img} className="card-img-top" />
                    <div className="card-body">
                        <h6 className="card-title">{product.name}</h6>
                        <h6 className="card-title text-danger">S/ {product.price.toFixed(2)}</h6>
                        <p className="card_p__text">{product.description}</p>
                    </div>
                </div>
            </div>
                )
            }
            
            
        </main>
    )
}


export default Detalle