import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useState, useEffect} from "react";
import axios from "axios";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  const content = products && products.map(product => {
    return ( 
      <Box sx={{ flexGrow: 1 }}>
      <Grid>
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
   </Grid>
   </Box>
  )})
  
  return (
    <>
    {content}
    </>
  );
}

export default Product
