import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'


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
// min-width: 225px;
const Container = styled.div`
    flex: 1;
    margin: 5px;
    width: 16%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    position: relative;
    overflow: hidden;
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
    top: 50px;
`
const Image = styled.img`
    width: 100%;
    max-height: 300px;
    z-index:2;
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
    text-align:center;
    padding-top: 10px;
`

const ProductLinePromo = styled.h2`
    font-weight: normal;
    font-size:20px;
    text-align:center;
`

const Span = styled.span`
text-decoration: line-through;
`

const Warm = styled.span`
`
const Date = styled.span`
`

const Item = ({ item, title }) => {
    const url = useSelector(state => state.user.url);

    const [orderprice, setOrderPrice] = useState();
    const [promoprice, setPromoPrice] = useState();

    useEffect(() => {
        fetchOrderPrice()
    }, []);

    const fetchOrderPrice = async () => {

        await axios.get(`${url}/api/orderprice_api/${item.id}`)

            .then(res => {
                // alert(res.data.order_price);
                setOrderPrice(res.data.order_price);
            });
    }

    useEffect(() => {
        fetchPromoPrice()
    }, []);

    const fetchPromoPrice = async () => {

        await axios.get(`${url}/api/promoprice_api/${item.id}`)

            .then(res => {
                setPromoPrice(res.data);
                console.log(promoprice)
            });
    }

    const date = typeof item.arrival_date == 'string' ? item.arrival_date.split('-') : '';
    const month = date[0];
    var mon;
    switch (month) {
        case "1":
            mon = "January";
            break;
        case "2":
            mon = "February";
            break;
        case "3":
            mon = "March";
            break;
        case "4":
            mon = "April";
            break;
        case "5":
            mon = "May";
            break;
        case "6":
            mon = "June";
            break;
        case "7":
            mon = "July";
            break;
        case "8":
            mon = "August";
            break;
        case "9":
            mon = "September";
            break;
        case "10":
            mon = "October";
            break;
        case "11":
            mon = "November";
            break;
        case "12":
            mon = "December";
            break;
        default:
            mon = "";
    }

    return (

        <Container>
            <Circle />
            <Image src={url + `/ecommerce/items/${item.photo_path}`} />
            <Info>

                <Icon>
                    <ShoppingCartOutlined />
                </Icon>

                <Icon>
                    <Link to={`/product/${item.id}`}>
                        <SearchOutlined />
                    </Link>
                </Icon>

                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>

            <ProductLineTitle style={{ marginTop: '0px' }}>{item.item_name}&nbsp;
                {
                    title == 'Promotion Items' ? <Warm style={{ color: 'tomato' }}>({item.discount_price}%)</Warm> : ''
                }
            </ProductLineTitle>
            {
                title == 'Promotion Items' ?
                    <ProductLinePromo>
                        <Span>{orderprice}</Span><small>MMK</small>&nbsp;&nbsp;&nbsp;{promoprice}<small>MMK</small>

                    </ProductLinePromo> : ''
            }
            {/* {
                title == 'New Arrival' ?
                    <ProductLinePromo>
                        <Date>
                            <small>{mon}</small>
                        </Date>
                    </ProductLinePromo> : ''
            } */}

        </Container>


    )
}

export default Item