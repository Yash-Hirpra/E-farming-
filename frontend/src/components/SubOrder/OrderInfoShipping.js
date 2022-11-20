import React from 'react';
import { ListGroup } from 'react-bootstrap';

const OrderInfoShipping = ({ order }) => {
  return (
    <ListGroup.Item>
      <h2>Shipping</h2>
      <p>
        <strong>Name: </strong> {order.user.name}
      </p>
      <p>
        <strong>Email: </strong>{' '}
        <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
      </p>
      <p>
        <strong>Address: </strong> {order.shippingAddress.address},{' '}
        {order.shippingAddress.city} {order.shippingAddress.postalCode}
      </p>
      {order.isDelivered ? (
        <Message variant='success'>Delivered on {order.deliveredAt}</Message>
      ) : (
        <Message variant='danger'>Not Delivered</Message>
      )}
    </ListGroup.Item>
  );
};

export default OrderInfoShipping;
