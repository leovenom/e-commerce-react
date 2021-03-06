import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//   {
//     id: 1,
//     name: 'Shoes',
//     description: 'Running shoes',
//     price: '€10',
//     image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
//   },
//   {
//     id: 2,
//     name: 'Macbook',
//     description: 'Apple macbook',
//     price: '€100',
//     image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2851&q=80'
//   },
// ]

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
  <main className={classes.content} >
    <div className={classes.toolbar} />
    <Grid container justify='center' spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
          <Product product={product} onAddToCart={onAddToCart} />
        </Grid>
      ))}
    </Grid>
  </main>
  )
 
}

export default Products;