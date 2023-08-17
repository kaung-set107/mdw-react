import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {mobile} from "../responsive"
import { useSelector} from 'react-redux'

const Container = styled.div`
flex: 1;
margin: 3px;
height: 50vh;
position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #ffffff;
    ${mobile({height: "30vh"})}
`
const Info = styled.div`
position: absolute;
bottom: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-left: 160px;
margin-bottom: 30px;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: solid 1px;
    padding: 5px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
    const url= useSelector(state => state.user.url);
  return (
    <Container style={{maxHeight: '250px'}}>
        <Link to={`/products/${item.id}/${item.category_name}`}>
        <Image src={url+`/ecommerce/brands/${item.photo_path}`}/>
        {/* <Image src={`http://localhost:8000/ecommerce/brands/${item.photo_path}`}/>  */}
        <Info>
            <Button>Details</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem