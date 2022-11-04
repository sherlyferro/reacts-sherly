import { useState } from "react"
import Item from "./Item"

const ItemList = ({products}) => {
    return (
        <div className="row">
            {
                products.map((product) => {
                    return (
                        <Item product={product}/> 
                    )
                })
            }
            
        </div>
    )
}


export default ItemList