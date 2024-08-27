import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  let [product, setProduct] = useState([]);
  let getData = () =>{
    axios.get('https://dummyjson.com/products').then((response)=>{
      setProduct(response.data.products)
    })
  };
  useEffect(() =>{
    getData()
  },[]);

  return (
  <>
  <Container>
    <Row>
      {product.map((item,i)=>(
      <Col lg={4} key={i}>
        <div className="shakib_d">
          <img src={item.thumbnail} alt="image" />
          <h3>{item.title}</h3>
          <p>{`${item.description.slice(0,50)}...see more`}</p>
          <h4>Price: ${item.price}</h4>
          <h3>Discount: {item.discountPercentage}%</h3>
        </div>
       </Col>
      ))}
      
    </Row>
  </Container>
  </>
  )
}

export default App
