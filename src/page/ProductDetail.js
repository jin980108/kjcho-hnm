import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/gyeongjin/kjcho-shoppingmallg/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} alt={product?.title} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩ {product?.price}</div>
          <div>{product?.choice ? 'Conscious Choice' : ''}</div>

          <div className='size-box'>
            {product?.size && (
              <DropdownButton
                as={ButtonGroup}
                key="size"
                id="dropdown-variants-size"
                variant="danger"
                title="사이즈 선택"
              >
                {product.size.map((size, index) => (
                  <Dropdown.Item key={index} eventKey={index.toString()}>
                    {size}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            )}
          </div>
          <div className='add-box'>추가</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;


