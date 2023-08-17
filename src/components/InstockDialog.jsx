import React,{ useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import styled from 'styled-components';
import { useSelector} from 'react-redux'
import { useNavigate} from 'react-router-dom'

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    color: #555555;
`
const DialogTitle = styled.div`
    padding: 8px 0px;
`
const Img = styled.img`
    width: 500px;
    max-width: 400px;
    height: auto;
`

const InstockDialog = (props) => {
    const navigate = useNavigate();
    const makepreorder = () =>{
        navigate('/order/v2');
    }
  return (
    <div>
        <Dialog open={props.open} onClose={props.close}>
        <DialogTitle  className='text-center'><Title>Stock Unavaliable!</Title></DialogTitle>
        <DialogContent>
        <DialogContentText className='text-center'><b>If you want to make preorder,please click  the Preorder button.</b></DialogContentText>
        
        </DialogContent>
        <DialogActions>
        <Button onClick={props.close} style={{backgroundColor: 'red', color: 'white'}}>Close</Button>
        <Button onClick={makepreorder} style={{backgroundColor: '#79a6fa', color: 'white'}}>Preorder</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default InstockDialog;