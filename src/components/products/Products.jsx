import React from "react";
import { Grid } from "@mui/material";
import Product from "./product/Product";

const products = [
    {id:1, name:'Shoes', description:'Running Shoes', price:'$5', image:'https://images.unsplash.com/photo-1530389912609-9a007b3c38a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
    {id:2, name:'Macbook', description:'Apple Macbook', price:'$10', image:'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
]

const Products = ()=>{
    return (
        <main>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>

    )
}

export default Products;