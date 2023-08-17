
import React  from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { Navigate, useNavigate,Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ColorNav from './ColorNav';
import Footer from './Footer';
import InvoiceDialog from './InvoiceDialog';
import PaymentDialog from './PaymentDialog';

const Div = styled.div`
margin-top:90px;
`
const Wrapper = styled.div`
    width: 100vw;
   
    padding: 50px;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({padding: '50'})}
`
const Title = styled.h1`
    font-size: 35px;
    margin-bottom: 30px;
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
    width: 100%;
    height: auto;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    border: 1px solid rgba(2,127,157,1);
    ${mobile({width: "90%"})}
`
const Tr = styled.tr`
    width: 100%;
    height: 80px;
    margin-top: 10px;
    margin-bottom: 10px;
    ${mobile({width: "90%"})}
`
const Th = styled.th`
    background-color: rgba(2,127,157,1);
    border: 1px solid rgba(2,127,157,1);
    color: #ffffff;
    padding: 20px;
    text-align: center;
    ${mobile({width: "90%"})}
`
const Td = styled.td`
    text-align: center;
    ${mobile({width: "90%"})}
`
const TableButton = styled.button`
    padding: 3px;
    background-color: black;
    color: white;
    font-size: 17px;
    font-weight: 600;
    border-radius: 3px;
    text-align: center;
`
const TableButton1 = styled.button`
    padding: 3px;
    background-color: teal;
    color: white;
    font-size: 17px;
    font-weight: 600;
    border-radius: 3px;
    text-align: center;
    margin-left : 10px;
    border : none;
`
const TableButton2 = styled.button`
    padding: 3px;
    background-color: rgba(2,127,157,1);
    color: white;
    font-size: 17px;
    font-weight: 600;
    border-radius: 3px;
    text-align: center;
    margin-left : 10px;
    border : none;
`

const Span = styled.span`
    background-color: rgba(2,127,157,1);
    color: white;
    font-size: 15px;
    font-weight: 600;
    padding: 4px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
`

export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
  margin-left: 200px;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "white" : "lightgray")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
  }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;

const OrderList = () => {

    const [orders, setOrders] = useState([]);
    const [preorders, setPreorders] = useState([]);
    const [active, setActive] = useState(0);
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    const [countingunit,setCountingUnit] = useState([{}]);
    const [ecounting, setEcounting] = useState([]);
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);
    const [attachs, setAttachs] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [showPaymentDialog, setShowPaymentDialog] = useState(false);
    const [orderId,setOrderId] = useState('');

    const username = useSelector(state=>state.user);
    const url= useSelector(state => state.user.url);

    useEffect(() =>{
        fetchOrderList();
    },[]);

    const onInvoiceClicked =(id) => {
        // 
        axios.get(url+'/api/ecommerce_order_detail/'+id)
        .then(res=>{
            console.log(res.data.counting_units);
            setName(res.data.orders.customer_name);
            setPhone(res.data.orders.customer_phone);
            setAddress(res.data.orders.deliver_address);
            setAttachs(res.data.attachs);
            setCountingUnit(res.data.counting_units);
            setEcounting(res.data.units);
            setColor(res.data.color);
            setSize(res.data.size);
        })
        setShowDialog(true);
    }

    const onPaymentClicked = (id) => {
        setShowPaymentDialog(true);
        setOrderId(id);
    }
    
    const navigate = useNavigate();

    const orderDetail = (id) =>{
        navigate("/order_detail/"+id);
    }

    const fetchOrderList = () => {
        axios.get(url+'/api/ecommerce_order_index')
        .then(res=>{
            console.log(res.data.instock);

            const filteredData = res.data.instock.filter((data) => {
                return data.customer_id == username.id
            })
            const filteredData1 = res.data.preorder.filter((data) => {
                return data.customer_id == username.id
            })
            setOrders(filteredData);
            setPreorders(filteredData1);
        })
    }

    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
          setActive(index);
        }
      };

    return (
        
        <div>
            <div>
                <ColorNav/>
            </div>
        <Div>
        <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
           Instock Order List
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
           Pre Order List
        </Tab>
        </Tabs>

        <>
        <Content active={active === 0}>
        <Wrapper>
            <Table style={{marginBottom: "160px"}}>
                <Tr>
                    <Th>No</Th>
                    <Th>Order No</Th>
                    <Th>Customer Name</Th>
                    <Th>Order Address</Th>
                    <Th>Order Date</Th>
                    <Th>Order Status</Th>
                    <Th>Total Quantity</Th>
                    <Th>Total Amount</Th>
                    <Th>Detail</Th>
                </Tr>
                {
                    orders.map((order, index) => (
                        <Tr key={order.id}>
                            <Td>{++index}</Td>
                            <Td>{order.order_code}</Td>
                            <Td>{order.customer_name}</Td>
                            <Td>{order.deliver_address}</Td>
                            <Td>{order.order_date}</Td>
                            
                            <Td><Span>{order.order_status}</Span></Td>
                            <Td>{order.total_quantity}</Td>
                            <Td>{order.total_amount}</Td>
                            <Td>
                            {/* <Link to={'/order_detail/'+order.id}> */}
                            <div class="d-flex align-items-center">
                            <TableButton onClick={()=>orderDetail(order.id)}>Detail</TableButton>
                            {/* </Link>    */}
                            <TableButton1 onClick={()=>onInvoiceClicked(order.id)}>Invoice</TableButton1>

                             <TableButton2 onClick={()=>onPaymentClicked(order.id)}>Payment</TableButton2> 
                            </div>
                              
                            </Td>
                        </Tr>
                    ))
                }
            </Table> 
        </Wrapper>
        </Content>
        <Content active={active === 1}>
        <Wrapper>
            <Table>
                <Tr>
                    <Th>No</Th>
                    <Th>Order No</Th>
                    <Th>Customer Name</Th>
                    <Th>Order Address</Th>
                    <Th>Order Date</Th>
                    <Th>Order Status</Th>
                    <Th>Total Quantity</Th>
                    <Th>Total Amount</Th>
                    <Th>Detail</Th>
                </Tr>
                {
                    preorders.map((preorder, index) => (
                        <Tr key={preorder.id}>
                            <Td>{++index}</Td>
                            <Td>{preorder.order_code}</Td>
                            <Td>{preorder.customer_name}</Td>
                            <Td>{preorder.deliver_address}</Td>
                            <Td>{preorder.order_date}</Td>
                            
                            <Td><Span>{preorder.order_status}</Span></Td>
                            <Td>{preorder.total_quantity}</Td>
                            <Td>{preorder.total_amount}</Td>
                            <Td>
                            <div class="d-flex align-items-center">
                            <Link to={{ pathname:'/order_detail/'+preorder.id }}>
                                <TableButton>Detail</TableButton>
                            </Link>
                            <TableButton1 onClick={()=>onInvoiceClicked(preorder.id)}>Invoice</TableButton1>    

                             <TableButton2 onClick={()=>onPaymentClicked(preorder.id)}>Payment</TableButton2> 
                            </div>
                           
                            </Td>
                        </Tr>
                    ))
                }
            </Table> 
        </Wrapper>
        </Content>
         </>
        </Div>
        <div>
            <InvoiceDialog open={showDialog} close={()=>setShowDialog(false)} name={name} phone={phone} address={address} unit = {countingunit} ecounting = {ecounting} color = {color} size = {size} attachs = {attachs} />
            <PaymentDialog open={showPaymentDialog} close={()=>setShowPaymentDialog(false)} orderId={orderId}/>
            <Footer/>
        </div>
        </div>
    );
}

export default OrderList;