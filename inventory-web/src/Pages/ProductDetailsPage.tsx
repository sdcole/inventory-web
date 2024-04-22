import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { ProductObject } from '../Objects/ProductObject';
import { useNavigate } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { productID } = useParams<{ productID: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState<ProductObject | null>(null);
  const [openDialog, setOpenDialog] = React.useState(false);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://192.168.0.10:50670/Products/GetProductsByID?productID=${productID}`);
        setProduct(response.data[0]);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProduct();
  }, [productID]);

  const handleDeleteProduct = async () => {
    try {
      await axios.delete(`http://192.168.0.10:50670/Products/DeleteProduct?productID=${productID}`);
      navigate('/products');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  if (!product) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <div>
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
      <Button variant="contained" color="secondary" onClick={handleOpenDialog}>
        Delete Product
      </Button>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Delete Product</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this product?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleDeleteProduct} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductDetailsPage;