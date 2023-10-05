import * as React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

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
             <Link to="/productpage"><Card.Img style={{width: 200, height: 200}} variant="top" src={require(`../images/${product.image}`)}/></Link>
             <Card.Body>
               <Card.Title>
                 {product.productName.toUpperCase()}
               </Card.Title>
               <Card.Text>
                 {product.price} PKR
               </Card.Text>
               <Link to="/productpage"><Button style={{backgroundColor:"#008080"}}>Add to Cart</Button></Link>
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
