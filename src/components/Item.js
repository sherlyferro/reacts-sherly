import { useState } from "react"
import { Link } from "react-router-dom"
import './Item.css'
const Item = ({product}) => {
    return (
        <div className="col-4 mb-5 d-flex justify-content-center">
            <Link to={"/detalle/"+ product.id} className="link__store">
                <div className="card card__store" style={{ width: '18rem' }}>
                    <img src={product.img} className="card-img-top"/>
                    <div className="card-body">
                        <h6 className="card-title card__text">{product.name}</h6>
                        <p className="card_p__text">{product.description}</p>
                        <h6 className="card-title card__text_price">S/ {product.price.toFixed(2)}</h6>
                        <h6 className="card-title card__text_discont">S/ {product.discont}</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}


export default Item