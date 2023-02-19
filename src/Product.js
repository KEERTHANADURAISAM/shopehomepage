import { AppBar, Button, Card, CardActions, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { data } from './data'; 
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
export default function Product() {
  const [card,setCard]=useState(data)
 const [items,setItems]=useState(0)
  return (
    <div>


         <AppBar position="static">
      <Container maxWidth="xl">
                <Toolbar className='nav'>
                <Typography sx={{fontFamily:'fantasy',fontSize:30 ,color:'black',letterSpacing:2}}><b>START SHOPE 🛍️</b></Typography>
                    <Typography>Home</Typography>
                    <Typography>About</Typography>
                    <FormControl sx={{ width: "100px" }}>
              <InputLabel
                id="demo-simple-select-label"
                sx={{ textcolor: "black" }}
              >
                Shop
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Shop"
              >
                <MenuItem>All Products</MenuItem>
                <hr />
                <MenuItem>popular Items</MenuItem>
                <MenuItem>New Arrivals</MenuItem>
              </Select>
            </FormControl>

            <Button sx={{ marginLeft: "auto", padding: "30px" ,color:'black'}}>
              ❤️<ShoppingCartTwoToneIcon />Cart
              <button className="cart-0">{items}</button>
            </Button>
                    </Toolbar>
                </Container>
        </AppBar>
      <div className='card-body'>
{data.map((prod,idx)=>(
<CardDetails
key={idx}
product_img={prod.product_img}
product_name={prod.product_name}
product_price={prod.product_price}
product_rating={prod.product_rating}
idx={idx}
items={items}
setCard={setCard}
setItems={setItems}


/>
))}
</div>  
 </div>
    
  )
}

function CardDetails({setItems,setCard,idx,product_img,product_name,product_price,product_rating,items}){
  const [showbtn,setShowbtn]=useState(true)
  const handleAdd=(idx,items,setItems)=>{
    setShowbtn(!showbtn)
    setItems(items+1)
    
  }
  const handleRemove=(idx,items,setItems,x)=>{
    setShowbtn(!showbtn)
    setItems(items-1)
    x.disabled=true;
  }
 
return(
<div>
  <Card sx={{ maxWidth: 340 }}>
  <CardMedia
   sx={{ height: 340 }}
   image={product_img}
   title="product img"
 />
 <CardContent className='card-content'>
   <Typography gutterBottom variant="h5" component="div">
     {product_name}
   </Typography>
   <Typography >
    ${product_price}
   </Typography>
   <Typography >
    {product_rating}
   </Typography>
 </CardContent>
 <CardActions className='card-btn'>
  {showbtn ?
   <Button size="small" onClick={()=>handleAdd(idx,items,setItems)} >Add</Button>:
   <Button size="small" onClick={()=>handleRemove(idx,items,setItems)}>Remove</Button>}

 </CardActions>
 </Card>
 </div>
)
}

