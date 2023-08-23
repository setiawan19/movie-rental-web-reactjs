import React from 'react';
import { Button, Col, Card } from 'react-bootstrap';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.length;

  return (
      <Col sm={12} md={3} lg={2}>
        <h5>Shopping Cart</h5>
        <p>Total : {totalPrice}</p>

        <div className="cart-items">
          {cartItems.map((item, index) => (
            <Card key={index} className="mb-2 cart-item">
              <p>{item.title}</p>
              <Button variant="danger" onClick={() => removeFromCart(index)}>Remove</Button>
            </Card>
          ))}
        </div>
      </Col>
  );
};

export default ShoppingCart;
