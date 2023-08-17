import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector} from 'react-redux'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    width: 360px;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    width: 100%;
    z-index:2;
    object-fit:contain;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
       background-color: #e9f5f5;
    transform: scale(1.1);
    }
`

const ProductLineTitle = styled.h2`
    font-weight: bold;
    font-size:20px;
    margin-left:50px;
    position: absolute;
bottom: 0;
    
`

const ItemOne = ({item}) => {
    const url= useSelector(state => state.user.url);
  return (
    <Container>
        <Circle/>
        <Image src={url+`/ecommerce/items/${item.photo_path}`}/>
        <Info>
            
            <Icon>
               <ShoppingCartOutlined/>          
            </Icon>

            <Icon>
                <Link to={`/product/${item.id}`}>
                    <SearchOutlined/>
                </Link>
                
            </Icon>

            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
            
        </Info>
        <ProductLineTitle>{item.item_name}</ProductLineTitle>
    </Container>
    
    
  )
}

export default ItemOne