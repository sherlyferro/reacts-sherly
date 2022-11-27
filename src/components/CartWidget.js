import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

function CartWidget() {
  const { data } = useContext(DataContext)
  return (
    <Link to="/carrito">
      <span className="material-icons">shopping_cart</span> {data.products.length}
    </Link>
  );
}

export default CartWidget;
