import * as React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

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
      <>
      {Array.from({ length: 1 }).map((_, idx) => (
        <div className='col'>
           <Card className="card1" key={product.Id}>
             <Card.Img style={{width: 200, height: 200}} variant="top" src={require(`../images/${product.image}`)}/>
             <Card.Body>
               <Card.Title>
                 {product.productName.toUpperCase()}
               </Card.Title>
               <Card.Text>
                 {product.price} PKR
               </Card.Text>
               <Button style={{backgroundColor:"#008080"}}>Add to Cart</Button>
             </Card.Body>
           </Card>
         </div>
       ))}</>
  )})
  
  return (
    <>
   
    <div className='container'>
      <div className='row'>
       {content}
      </div>
    </div>
    </>
  );
}

export default Product
