import React, { useEffect, useState } from 'react'


const Products = () => {
  const [products ,setProducts ] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let r =await fetch(" http://localhost:3004/products")
      let d =await r.json();
      setProducts(d);
    };
    fetchProducts();
  },[]);
  return (

    <div>
      {products.map((p) => (
        <div key={p.id}>
          <table>
            <th>Product</th>
            <tr>{p.name}</tr>
            <th>Price</th>
            <tr>{p.price}</tr>
          </table></div>
      ))}
    </div>
  )
}

export default Products
