import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Row, Col } from 'react-bootstrap';
import ProductByFarmer from '../components/ProductByFarmer';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getProductsByFarmer } from '../features/product/productsByFarmerSlice';

const ProductsByFarmerScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productsByFarmerState = useSelector((state) => state.productsByFarmer);
  const { loading, error, productsByFarmer } = productsByFarmerState;
  useEffect(() => {
    dispatch(getProductsByFarmer({ id }));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {productsByFarmer.map((productByFarmer) => (
            <Col key={productByFarmer._id} sm={12} md={6} Lg={4} xl={3}>
              <ProductByFarmer productByFarmer={productByFarmer} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};
export default ProductsByFarmerScreen;
