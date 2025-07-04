import React, { useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {

  function VariantsExample() {
  return (
    <>
      {['Danger'].map(
        (variant) => (
          <DropdownButton
            className='dropdown-button'
            as={ButtonGroup}
            key="size"
            id={`dropdown-variants-size`}
            variant={variant.toLowerCase()}
            title="사이즈"
          >
            <Dropdown.Item eventKey="1">{product?.size[0]}</Dropdown.Item>
            <Dropdown.Item eventKey="2">{product?.size[1]}</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>{product?.size[2]}</Dropdown.Item>
          </DropdownButton>
        ),
      )}
    </>
  );
}

  let { id } = useParams();
  const [product,setProduct] = useState();
  const getProductDetail=async()=>{
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url)
    let data = await response.json();
    console.log(data);  
    setProduct(data);
  }
    useEffect(() => {
    getProductDetail()
  },[])

  return <Container>
    <Row>
      <Col className='product-img'>
        <img src={product?.img}/>
      </Col>
      <Col>
        <div>{product?.title}</div>
        <div>₩ {product?.price}</div>
        <div>{product?.choice?"Conscious Choice":""}</div>
        <div>{VariantsExample()}</div>
        <div className="add-box">추가</div>
      </Col>
    </Row>
  </Container>
}

export default ProductDetail
