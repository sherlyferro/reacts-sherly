import { useState } from "react"
import { Link } from "react-router-dom"

const Item = ({product}) => {
    return (
        <div className="col-4 mb-3">
            <div className="card" style={{ width: '18rem' }}>
                <img src={product.img} className="card-img-top" />
                <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <h6 className="card-title text-danger">S/ {product.price.toFixed(2)}</h6>
                    <p className="card_p__text">{product.description}</p>
                    <Link to="/detalle/1">
                        <button className="btn btn-outline-dark">Ver Detalle</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}


export default Item