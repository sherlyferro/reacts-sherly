import { useState, useEffect } from "react"
import ItemList from "../components/ItemList"
import api from '../api';

const Reloj = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        let myPromise = new Promise((res) => {
            setTimeout(() => {
                res(api.products.filter( x => x.category === "reloj"))
            }, 2000);
        })
        myPromise.then((respuesta) => { setProducts(respuesta) }).catch((error) => {})
    })


    return (
        <main>
            <div className="container-fluid p-5 bg-primary text-white text-center">
                <h1>RELOJES</h1>
                <p>Encuentra tus relojes a un super precio!</p>
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
                    ):
                    (
                        <ItemList products={products} />
                    ) 
                }
            </div>
        </main>
    )
}


export default Reloj