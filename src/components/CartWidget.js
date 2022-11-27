import React, {useEffect, useContext, useState} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
// el carrito incrementa las categorias no los productos //

function CartWidget() {
  const [total, setTotal] = useState(0)
  const { data } = useContext(DataContext)
  useEffect(() => {
    let temp = 0
    data.products.forEach(product => {
      temp = temp + product.quantity
    });
    setTotal(temp)
  },[data])
  return (
    <Link to="/carrito">
      <span className="material-icons">shopping_cart</span> {total}
    </Link>
  );
}

export default CartWidget;
