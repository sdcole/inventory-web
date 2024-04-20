import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Product } from '../Objects/Product';

const ProductCardContainer = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
}));

const ProductCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
}));


function pad(num:number | undefined, size:number): string {
  let s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}
const ProductCard = ({ product }: { product: Product }) => {
  //This appends the 10 characters to make the serial number look better.
  product.productID = pad(product.productID, 10) as unknown as number;
  return (
    <Grid item key={product.productID} xs={12} sm={6} md={4} lg={3}>
      <Link to={`/products/${product.productID}`} style={{ textDecoration: 'none' }}>
        <ProductCardContainer>
          <ProductCardContent>
            <Typography gutterBottom variant="h6">
              {product.productName}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {product.productDescription}
            </Typography>
            <Typography variant="body2">
              Price: ${product.productPrice}
            </Typography>
            <Typography variant="body2">
              Quantity: {product.productQuantity}
            </Typography>
            <Typography variant="body2">
              Product Serial: {product.productID}
            </Typography>
          </ProductCardContent>
        </ProductCardContainer>
      </Link>
    </Grid>
  );
};

export default ProductCard;