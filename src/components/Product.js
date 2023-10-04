import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useState, useEffect} from "react";
import axios from "axios";

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

  const content = ""
  
  return (
    <>
    {products && products.map(product => {
    return <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
  })}
    </>
  );
}

export default Product
