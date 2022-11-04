import { useState, useEffect } from "react"
import ItemList from "../components/ItemList"
import api from '../api';

const Reloj = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        let load = new Promise((res) => {
            setTimeout(() => {
                res(api.products.filter( x=> x.category === "reloj"))
            }, 2000);
        })
        load.then((respuesta) => { setProducts(respuesta) }).catch((error) => {
            //console.log(error)
        })
    })
    return (
        <main>
            <div className="container-fluid p-5 bg-primary text-white text-center">
                <h1>RELOJES</h1>
                <p>Encuentra tus relojes a un super precio!</p>
            </div>
            <div className="container mt-3">

                {products.length == 0 ? <h1>Cargando ..</h1> : <ItemList products={products} />}
            </div>
        </main>
    )
}


export default Reloj