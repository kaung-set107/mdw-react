import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import {mobile} from "../responsive";

const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
height: auto;
padding:20px;
`
const Div = styled.div`
`
const Img = styled.img`
width : 400px;
`
const Address = styled.p`
margin-top: 20px;
`
const Title = styled.h5`
   justify-content : center;
   color : secondary;
   font-weight : bold;
`

const Name = styled.span`
   color : secondary;
`
const Phone = styled.span`
   float : right;
   color : secondary;
`

const FilterOption = styled.option``

const Table = styled.table`
    width: 100%;
    height: auto;
    padding: 20px;
    margin-top: 20px;
    border-radius: 20px;
    border: 1px solid rgba(2,127,157,1);
    ${mobile({width: "90%"})}
`
const Tr = styled.tr`
    width: 100%;
    ${mobile({width: "90%"})}
`
const Th = styled.th`
    text-align: center;
    ${mobile({width: "90%"})}
`
const Td = styled.td`
    text-align: center;
    ${mobile({width: "90%"})}
`

export default function InvoiceDialog(props) {
   let total_amount= 0;
   const url= useSelector(state => state.user.url);
  return (
    <div>

      <Dialog open={props.open} onClose={props.close} id="checkout" width="1500px;">
         <Wrapper>
         <Div>

<Div className="col-12 text-center">
    <Div>
        <Img src={url+"/image/medicalWorld.png"}/>
    </Div>

    <Div>
        <Address>No.28, 3rd Street, Hlaing Yadanar Mon Avenue, Hlaing Township, Yangon
            <br /> 09 777 00 5861, 09 777 00 5862
        </Address>
    </Div>
    <Div>
        <Title>Profoma E Invoice</Title>
    </Div>
</Div>
</Div>
<Div>
   <Name>Customer Name : {props.name}</Name>
   <Phone>Customer Phone : {props.phone}</Phone>
</Div>
{
                props.attachs.length > 0 ? 
                <Table className="table table-striped">
                <Tr>
                    <Th>No</Th>
                    <Th>Item</Th>
                    <Th>Qty</Th>
                    <Th>Price</Th>
                    <Th>Description</Th>
                </Tr>
                {props.attachs.map((attach, index) => (
                    <Tr key={attach.id}>
                    <Td>{++index}</Td>
                    <Td><img src={url+`/preorder/${attach.item_photo}`} alt="" height='auto' width='170px'/></Td>
                    <Td>{attach.quantity}</Td>
                    <Td>{attach.price}</Td>
                    <Td>{attach.description}</Td>
                    <Td hidden>{total_amount += attach.quantity * attach.price}</Td>
                </Tr> 
                ))}        
                </Table>
                : 
                <Table className="table table-striped">
                <Tr>
                    <Th>No</Th>
                    <Th>Item</Th>
                    <Th>Color</Th>
                    <Th>Size</Th>
                    <Th>Qty</Th>
                    <Th>Price</Th>
                    {/* <Th>Total</Th> */}
                </Tr>
                {
                    props.unit.map((unit, index) => (
                        props.ecounting.map((ec, i) => (
                            unit.id == ec.counting_unit_id ?
                        <Tr key={unit.id}>
                            <Td>{++index}</Td>
                            <Td>{unit.unit_name}</Td>
                            <Td>{props.color[i]}</Td>
                            <Td>{props.size[i]}</Td>
                            <Td>{ec.quantity}</Td>
                            <Td>{ec.price}</Td>
                            <Td hidden>{total_amount += ec.quantity * ec.price}</Td>
                        </Tr> : null
                    ))
                
                    ))
                }
                
                </Table>
}


            <Div>
   <Name>Customer Address : {props.address}</Name>
   <Phone>Total Amount : {total_amount}</Phone>
</Div>

         </Wrapper>
        <DialogActions>
          <Button onClick={props.close}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// phyo
//maymyat