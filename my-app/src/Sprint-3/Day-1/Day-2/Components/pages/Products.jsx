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
          <Link to={`/products/${p.id}`}>{p.name}</Link>
      {  p.price}
          </div>
      ))}
    </div>
  )
}

export default Products
