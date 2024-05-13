import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="card mb-3">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        {/* Add button for adding to cart */}
      </div>
    </div>
  );
}

export default Product;
