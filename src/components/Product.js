import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useState, useEffect} from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
 function Product() {
  const [products,setProduct] = useState([]);

  const getData = () => {
    axios.get('https://localhost:7133/api/Product')
    .then(result => {
        setProduct(result.data)
    })
    .catch((error) => {
        console.log(error)
    })
}
console.log(products)
useEffect(() => {
 getData();
}, [])

  const content = products && products.map(product => {
    return (
      <Col>
      <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={require(`../images/${product.image}`)}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.productDescription}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
          <button>Add to cart</button>
        </CardContent>
      </CardActionArea>
    </Card>
    </Col>
  
  )})
  
  return (
    <>
   <Container>
      <Row>
    {content}  
    </Row>
    </Container>
    </>
  );
}

export default Product
