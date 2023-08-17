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
import { Link } from 'react-router-dom'
import family from '../files/family.png'
import branded from '../files/branded.png'
import eco from '../files/ecofamily.png'



const Wrapper = styled.div`
flex: 1;
margin: 3px;
height: 33vh;
position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    align-items: center;
    background-color: #fcf5f5;
    ${mobile({height: "30vh"})}
`
const Info = styled.div`
position: absolute;
bottom: 0;
left: 0;
align-items: center;
justify-content: center;
flex-direction: column;
margin-left: 40px;
margin-bottom : 20px;
`
const Info1 = styled.div`
position: absolute;
bottom: 0;
left: 0;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 160px;
`

const Info2 = styled.div`
position: absolute;
bottom: 0;
left: 0;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 185px;
`

const Btn= styled.button`
    border: solid 1px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 300; 
`
const Price= styled.span`
    font-size : 16px;
    font-style : inherint;
    color: #5C3317;
    cursor: pointer;
    font-weight: 300; 
    margin-left: 40px
`


const Bank = styled.div`
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: space-between;
  flex-direction: row;
`


export default function PreDialog(props) {

    const closeDialog = () =>{
        
    }

  return (
    <div>

      <Dialog open={props.open} onClose={props.close} id="preorder" width="2000px;">
      <DialogTitle className='text-center'><b>Avaiable Preorder Brands</b></DialogTitle>
      <DialogContentText className='text-center'><b>If you want to make preorder,click one of the following brands.</b></DialogContentText>

        <DialogContent>
            <Bank>
            <Wrapper>
        <Link to={`/preorder/1`}>
        <Image src={family}/>
        <Info2>
        <Price style={{marginLeft:'47px',}}>Price Range</Price>
        </Info2>
        <Info1>
        <Price>22000-25500</Price>
        </Info1>
        <Info>
            <Btn onClick={props.close}>Make Order</Btn>
        </Info>
        </Link>
        </Wrapper>
        <Wrapper>
        <Link to={`/preorder/2`}>
        <Image src={branded}/>
        <Info2>
        <Price style={{marginLeft:'47px',}}>Price Range</Price>
        </Info2>
        <Info1>
        <Price>30000-65000</Price>
        </Info1>
        <Info>
            <Btn onClick={props.close}>Make Order</Btn>
        </Info>
        </Link>
        </Wrapper>
        <Wrapper>
        <Link to={`/preorder/3`}>
        <Image src={eco}/>
        <Info2>
        <Price style={{marginLeft:'47px',}}>Price Range</Price>
        </Info2>
        <Info1>
        <Price>18000-20000</Price>
        </Info1>
        <Info>
            <Btn onClick={props.close}>Make Order</Btn>
        </Info>
        </Link>
        </Wrapper> 
            </Bank>
       
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// phyo
//maymyat