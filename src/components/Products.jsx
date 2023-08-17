import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'
import { DataObjectTwoTone } from '@mui/icons-material'
import { useSelector} from 'react-redux'

const Container = styled.div`
    display: flex;
    padding:20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat,filters,sort,fil}) => {
  console.log(cat,filters,sort);

  const [products,setProducts] =  useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);
  const url= useSelector(state => state.user.url);

  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res = await axios.get(cat ? url+`/api/subcategory_api/${cat}` : "http://localhost:5000/api/subcategory_api");
        // console.log(res.data);
        setProducts(res.data);
        
      }catch(err){}
    };
    getProducts();
    
  },[cat]);

 
  return (
    
    <Container>
      
        {/* {cat ? filteredProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        )) : products.slice(0,4).map((item)=>(
          <Product item={item} key={item.id}/>
      ))} */}
      {
        fil == 0 ?
      products.slice(0,6).map((item)=> (
        <Product filter={filters.part} item={item} key={item.id}/>
      )) : products.slice(0,6).map((item)=> (
        item.name == fil ?
        <Product filter={filters.part} item={item} key={item.id}/> : ''
      ))
      }
    </Container>
  )
}

export default Products