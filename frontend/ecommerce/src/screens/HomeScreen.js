import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());

    return () => {};
  }, [])

  return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
     
     <ul className="products">
       
        {
          products.map((product) =>
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product._id}>
                  <img className="product-image" src={product.file_url} alt={product.name} />

                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">R$ {product.price}</div>
              </div>
            </li>) 
        }
    <div className="button-redirect">
      <Link to={'/register/'}>
         <button className="button-to-CRUD">Acessar o CRUD</button>
      </Link>
    </div>
      </ul>
      
}
export default HomeScreen;