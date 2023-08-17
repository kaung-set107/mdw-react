import React  from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ColorNav from './ColorNav';
import Footer from './Footer';
import { useSelector} from 'react-redux'

const Div = styled.div`
    margin-top: 65px;
`
const Wrapper = styled.div`
    widtr: 100vw;
    height: auto;
    min-height: 100vh;
    padding: 50px;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({padding: '50'})}
`
const Title = styled.h1`
    font-size: 50px;
    margin-bottom: 20px;
    text-align: center;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
    ${mobile({textAlign: "center"})}
`
const Table = styled.table`
    width: 70%;
    height: auto;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    border: 1px solid rgba(2,127,157,1);
    ${mobile({width: "90%"})}
`
const Tr = styled.tr`
    width: 100%;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    ${mobile({width: "90%"})}
`
const Th = styled.th`
    text-align: center;
    background-color: rgba(2,127,157,1);
    border: 1px solid rgba(2,127,157,1);
    color: #ffffff;
    padding: 20px;
    ${mobile({width: "90%"})}
`
const Td = styled.td`
    text-align: center;
    border-bottom: 1px solid rgba(2,127,157,1);
    padding: 10px 0px 10px 0px;
    ${mobile({width: "90%"})}
`
const Span = styled.span`
    background-color: rgba(2,127,157,1);
    color: white;
    font-size: 15px;
    font-weight: 600;
    padding: 6px;
    border-radius: 50px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
`
const BigBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-item: center;
    justify-content: space-between;
    flex-direction: row;
`
const RBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-item: center;
    justify-content: space-between;
    flex-direction: row;
`
// border-right: 2px solid rgba(0,0,0,0.3);
const LBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-item: center;
    justify-content: space-between;
    flex-direction: row;
`
const Left = styled.div`
    width: 50%;
    text-align: right;
    padding: 20px;
`
const Right = styled.div`
    width: 50%;
    padding: 20px;
`
const P = styled.p`
    font-size: 18px;
    font-weight: 600;
`

const OrderList = () => {

    const [ inputs, setInputs ] = useState({});
    const [ oinputs, setOInputs ] = useState([]);
    const [ attachs, setAttachs ] = useState([]);
    const [ecounting, setEcounting] = useState([]);
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);
    const url= useSelector(state => state.user.url);

    const {id} = useParams();

    useEffect(() => {
        fetchOrderDetail()
    },[]);

    const fetchOrderDetail = async () => {
        await axios.get(url+'/api/ecommerce_order_detail/'+id)
        .then(res=>{
            setInputs({
                id: res.data.orders.id,
                order_code: res.data.orders.order_code,
                order_date: res.data.orders.order_date,
                customer_name: res.data.orders.customer_name,
                customer_phone: res.data.orders.customer_phone,
                deliver_address: res.data.orders.deliver_address,
                total_quantity: res.data.orders.total_quantity,
                total_amount: res.data.orders.total_amount,
                payment_type: res.data.orders.payment_type,
                order_status: res.data.orders.order_status,
                payment_channel: res.data.orders.payment_channel,
                delivery_fee: res.data.orders.delivery_fee,
            });
            setOInputs(res.data.counting_units);
            setAttachs(res.data.attachs);
            setEcounting(res.data.units);
            setColor(res.data.color);
            setSize(res.data.size);
        });
    }

    return (

        <div>
            <div>
            <ColorNav/>
        </div>
        <Div>
            <Wrapper>
            <Title>Your Orders Detail</Title>
            <Description>This is where your order list shown</Description>
            <BigBox>
                <LBox>
                    <Left>
                        <P>NO : </P>
                        <P>Customer Name : </P>
                        <P>Order Phone : </P>
                        <P>Order Address : </P>
                        <P>Order Date : </P>
                        <P>Delivery Fee : </P>
                    </Left>
                    <Right>
                        <P> { inputs.id } </P>
                        <P> { inputs.customer_name } </P>
                        <P> { inputs.customer_phone } </P>
                        <P> { inputs.deliver_address } </P>
                        <P> { inputs.order_date } </P>
                        <P> { inputs.delivery_fee } </P>
                    </Right>
                </LBox>
                <RBox>
                    <Left>
                        <P>Order No : </P>
                        <P>Total Quantity : </P>
                        <P>Total Amount : </P>
                        <P>Payment Type : </P>
                        <P>Payment Channel : </P>
                        <P>Order Status :</P>
                    </Left>
                    <Right>
                        <P> { inputs.order_code } </P>
                        <P> { inputs.total_quantity } </P>
                        <P> { inputs.total_amount } </P>
                        <P> { inputs.payment_type } </P>
                        <P> { inputs.payment_channel } </P>
                        <Span>{ inputs.order_status }</Span>
                    </Right>
                </RBox>
            </BigBox>
            {
                attachs.length > 0 ? 
                <Table>
                <Tr>
                    <Th>No</Th>
                    <Th>Item Name</Th>
                    <Th>Qty</Th>
                    <Th>Price</Th>
                    <Th>Description</Th>
                </Tr>
                {attachs.map((attach, index) => (
                    <Tr key={attach.id}>
                    <Td>{++index}</Td>
                    <Td><img src={url+`/preorder/${attach.item_photo}`} alt="" height='auto' width='170px'/></Td>
                    <Td>{attach.quantity}</Td>
                    <Td>{attach.price}</Td>
                    <Td>{attach.description}</Td>
                </Tr> 
                ))} 
            </Table>  :
                <Table>
                <Tr>
                    <Th>No</Th>
                    <Th>Item Name</Th>
                    <Th>Color</Th>
                    <Th>Size</Th>
                    <Th>Qty</Th>
                    <Th>Price</Th>
                </Tr>
                {
                    oinputs.map((oinput, index) => (
                        ecounting.map((ec, i) => (
                            oinput.id == ec.counting_unit_id ?
                        <Tr key={oinput.id}>
                            <Td>{++index}</Td>
                            <Td>{oinput.unit_name}</Td>
                            <Td>{color[i]}</Td>
                            <Td>{size[i]}</Td>
                            <Td>{ec.quantity}</Td>
                            <Td>{ec.price}</Td>
                        </Tr> : null
                    ))
                    ))
                }
                
                
            </Table> 
            }
           
        </Wrapper>
        </Div>
        <div>
            <Footer/>
        </div>
        </div>
        

    );

}

export default OrderList;