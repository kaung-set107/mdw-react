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
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 500px;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Filter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`

const FilterTitle = styled.span`
    font-size: 15px;
    font-weight: 200;
    margin-bottom: 3px;
`
// hello world

const FilterSelect = styled.select`
    
    padding: 5px;
`

const FilterOption = styled.option``

const QRBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`


export default function BankInfoDialog(props) {
  const dispatch = useDispatch(); 
  const [file, setFile] = useState(null);
  const [remark, setRemark] = useState('');
  const [payamount, setPayamount] = useState('');
  const url= useSelector(state => state.user.url);

  const onFileChange = (event) => {  
    // Update the state
    setFile(event.target.files[0]);
   
  };

   const savefilename = () =>{
    // alert(file.name);
    let formdata={
      file:file,
      remark:remark,
      payamount: payamount,    
    }
    axios.post(url+'/api/storescreenshot', formdata,
    {
        headers: {
        'Content-Type': 'multipart/form-data'
    }
    }).then(res=>
        {
          Swal.fire({
            title:  "Success!",
            text: "Your Payment Screenshot is sent.",
            type: 'success',    
            });
        }
        ).catch(err =>{
          console.log('error');
        });
    document.getElementById('hidedialog').style.visibility = "hidden";
   }
  return (
    <div>
      
      <Dialog open={props.open} onClose={props.close} id="hidedialog">
        <DialogTitle><b>User Paid Information</b></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Paid Info
          </DialogContentText>
            <Form>
              <Input type="file" id='myFile' onChange={onFileChange}/>
              <Input type="text" id="payamount" name="" placeholder="Pay Amount" onChange={(e)=>setPayamount(e.target.value)}/>
              <Input type="text" id="remark" name="" placeholder="Remark" onChange={(e)=>setRemark(e.target.value)}/>
            </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancle</Button>
          <Button onClick={savefilename}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// phyo
//maymyat