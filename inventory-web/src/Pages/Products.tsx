import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import ProductDetailsPage from './ProductDetailsPage';
import ProductCard from '../Components/ProductCard'; // Updated import path
import { Product } from '../Objects/Product';
const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.0.10:50670/Products/GetProducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    const handleAddProduct = async () => {
      try {
        await axios.post('http://192.168.0.10:50670/Products/AddProduct', {
          productName,
          productDescription,
          productPrice,
          productQuantity,
        });
        // After adding the product, fetch the updated list of products
        fetchProducts();
        // Clear the form fields
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setProductQuantity('');
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };
    return (
        <div>

      <Routes>
        <Route
          path="/"
          element={(
            <Container maxWidth="md">
              <Typography variant="h4" gutterBottom>
                Products
              </Typography>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Product Name"
                      fullWidth
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Product Description"
                      fullWidth
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Product Price"
                      fullWidth
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Product Quantity"
                      fullWidth
                      value={productQuantity}
                      onChange={(e) => setProductQuantity(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button variant="contained" color="primary" onClick={handleAddProduct}>
                  Add Product
                </Button>
              </form>
              <Typography variant="h5" gutterBottom>
                Products List
              </Typography>
              <Grid container spacing={2}>
                {products.map((product) => (
                  <ProductCard key={product.productID} product={product} />
                ))}
              </Grid>
            </Container>
          )}
        />
        
      </Routes>

        </div>
    );
    
}
export default Products;
