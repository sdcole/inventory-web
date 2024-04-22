import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Typography, TextField, Button, Grid, Snackbar } from '@mui/material';
import axios from 'axios';
import InventoryCard from '../Components/InventoryCard'; // Updated import path
import { InventoryObject } from '../Objects/InventoryObject';

const Inventory = () => {
    const [inventoryList, setInventory] = useState<InventoryObject[]>([]);
    const [productName, setInventoryName] = useState('');
    const [productDescription, setInventoryDescription] = useState('');
    const [productPrice, setInventoryPrice] = useState('');
    const [productQuantity, setInventoryQuantity] = useState('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
      fetchInventorys();
    }, []);

    const fetchInventorys = async () => {
      try {
        const response = await axios.get('http://192.168.0.10:50670/Inventory/GetInventory');
        setInventory(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
      }
    };

    const handleAddInventory = async () => {
      try {
        await axios.post('http://192.168.0.10:50670/Inventory/AddInventory', {
          productName,
          productDescription,
          productPrice,
          productQuantity,
        });
        // After adding the product, fetch the updated list of products
        fetchInventorys();
        // Clear the form fields
        setInventoryName('');
        setInventoryDescription('');
        setInventoryPrice('');
        setInventoryQuantity('');
      } catch (error) {
        console.error('Error adding product:', error);
        setError('Error adding product. Please try again later.');
      }
    };

    const handleCloseSnackbar = () => {
      setError('');
    };

    const handlePriceChange = (value: string) => {
      // Regular expression to validate integer or decimal with two places
      const regex = /^\d+(\.\d{0,2})?$/;
      if (regex.test(value) || value === '') {
        setInventoryPrice(value);
      }
    };

    return (
        <div>
          <Snackbar
            open={Boolean(error)}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message={error}
          />
          <Routes>
            <Route
              path="/"
              element={(
                <Container maxWidth="md">
                  <Typography variant="h4" gutterBottom>
                    Inventory Log
                  </Typography>
                  <form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Inventory Name"
                          fullWidth
                          value={productName}
                          onChange={(e) => setInventoryName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Inventory Description"
                          fullWidth
                          value={productDescription}
                          onChange={(e) => setInventoryDescription(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Inventory Price"
                          fullWidth
                          value={productPrice}
                          onChange={(e) => handlePriceChange(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Inventory Quantity"
                          fullWidth
                          value={productQuantity}
                          onChange={(e) => setInventoryQuantity(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" onClick={handleAddInventory}>
                      Add Inventory
                    </Button>
                  </form>
                  <Typography variant="h5" gutterBottom>
                    Inventorys List
                  </Typography>
                  <Grid container spacing={2}>
                    {inventoryList.map((inventory) => (
                      <InventoryCard key={inventory.inventoryID} inventory={inventory} />
                    ))}
                  </Grid>
                </Container>
              )}
            />
          </Routes>
        </div>
    );
}

export default Inventory;