import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { InventoryObject } from '../Objects/InventoryObject';

const InventoryCardContainer = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
}));

const InventoryCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
}));


function pad(num:number | undefined, size:number): string {
  let s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};


const InventoryCard = ({ inventory }: { inventory: InventoryObject }) => {
  //This appends the 10 characters to make the serial number look better.
  inventory.inventoryID = pad(inventory.inventoryID, 10) as unknown as number;
  return (
    <Grid item key={inventory.inventoryID} xs={12} sm={6} md={4} lg={3}>
      <Link to={`/products/${inventory.inventoryID}`} style={{ textDecoration: 'none' }}>
        <InventoryCardContainer>
          <InventoryCardContent>
            <Typography gutterBottom variant="h6">
              Product ID: {inventory.productID}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Action: {inventory.actionID}
            </Typography>
            <Typography variant="body2">
              Quantity Changed: {inventory.quantityChanged}
            </Typography>
            <Typography variant="body2">
              Timstamp: {inventory.timestamp.toString()}
            </Typography>
          </InventoryCardContent>
        </InventoryCardContainer>
      </Link>
    </Grid>
  );
};

export default InventoryCard;