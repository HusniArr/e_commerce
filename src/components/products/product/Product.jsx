import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Product = ({ product }) => {
  return (
    <Card className=''>
        <CardMedia className='' image={product.image} title={product.name} />
        <CardContent>
            <div className=''>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5">
                    {product.price}
                </Typography>
            </div>
            <Typography variant="h2" color="textSecondary">{product.description}</Typography>
        </CardContent>
        <CardActions disableSpacing className=''>
            {/* <IconButton aria-aria-label='Add to Cart'>
                <AddShoppingCartIcon />
            </IconButton> */}
        </CardActions>
    </Card>
  )
}

export default Product