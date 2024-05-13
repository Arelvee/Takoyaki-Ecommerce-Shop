import React from 'react';

const CartItem = ({ item, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem  }) => {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={item.image} className="card-img" alt={item.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Quantity: {item.quantity}</p>
                        <p className="card-text">Price: ${item.price}</p>
                        <div className="btn-group" role="group" aria-label="Quantity controls">
                            <button type="button" className="btn btn-secondary" onClick={() => onDecreaseQuantity(item)}> - </button>
                            <button type="button" className="btn btn-secondary" onClick={() => onIncreaseQuantity(item)}> + </button>
                            <button type="button" className="btn btn-danger" onClick={() => onRemoveItem(item)}> Remove </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
