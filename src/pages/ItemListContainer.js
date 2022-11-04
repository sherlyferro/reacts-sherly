import { useState, useEffect } from "react"
import ItemList from "../components/ItemList"
import api from '../api';
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        let load = new Promise((res) => {
            setTimeout(() => {
                res(api.products)
            }, 2000);
        })
        load.then((respuesta) => { setProducts(respuesta) }).catch((error) => {
            //console.log(error)
        })
    })

    return (
        <main>
            <div className="container-fluid d-flex justify-content-center title__margin">
                <h2 className="title__main">RELOJES</h2>
            </div>
            <div className="container mt-3">
                {
                    products.length == 0 ? 
                    (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : 
                    (
                        <ItemList products={products} />
                    )
                }
            </div>
        </main>
    )
}


export default ItemListContainer