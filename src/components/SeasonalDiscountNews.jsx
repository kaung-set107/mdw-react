import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import {mobile} from "../responsive"
import bg from "../files/bg.png"

const Container = styled.div`
    height: 60vh;
    background-color: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url("../files/bg.png");
`
const Title = styled.h1`
    font-size: 35px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center"})}
`

const SeasonalDiscountNews = () => {
  return (
    <Container>
        <Title>Seasonal Discount News</Title>
        <Description>Get Timely updates and 10% off from your favorite products at this seasonal discount price.</Description>
    </Container>
  )
}

export default SeasonalDiscountNews