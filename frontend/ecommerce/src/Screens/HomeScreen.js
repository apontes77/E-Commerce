import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen (props) {
    return  <ul class="products">
    {
        data.products.map(product => 
        <li>
        <div class="product">
            <Link to={'/product/'+ product._id}>
                 <img class="product-image" src={product.image} alt=""/>
            </Link>
            <div class="product-name">
                <Link to={'/product/' + product._id}>{product.name}</Link>
            </div>
        <div class="product-brand">{product.brand}</div>
        <div class="product-quantity">Quantidade em estoque: {product.quantity} un.</div>
        <div class="product-price">R$ {product.price}</div>
        </div>
    </li>)
    }
   
</ul>
}

export default HomeScreen;