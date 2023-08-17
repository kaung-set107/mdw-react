import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Navigate, useNavigate,useLocation } from 'react-router-dom'
import styled from 'styled-components'
import AlertDialog from '../components/AlertDialog'
import {mobile} from "../responsive"
import { useDispatch,useSelector } from 'react-redux'
import { setUserInfo } from "../redux/userRedux"
import Navbar from '../components/Navbar'
import ColorNav from '../components/ColorNav'
import Footer from '../components/Footer'
import Swal from 'sweetalert2'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5));
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 15px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 30%;
    border: none;
    padding: 15px 20px;
    background-color: #32549b;
    color: white;
    cursor: pointer;
    
`

const Register = () => {

    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [onoff,setOnOff] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const url= useSelector(state => state.user.url);

    const dialogRef = useRef(null);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    
    const onNameChanged = (e) => setName(e.target.value);
    const onPhoneChanged = (e) => setPhone(e.target.value);
    const onEmailChanged = (e) => setEmail(e.target.value);
    const onAddressChanged = (e) => setAddress(e.target.value);
    const onUsernameChanged = (e) => setUsername(e.target.value);
    const onPasswordChanged = (e) => setPassword(e.target.value);

    const onRegisterClicked =() => {  

        const res = axios.post(url+'/api/website_user_store',{

            name: name,
            phone: phone,
            address: address,
            username: username,
            password: password,
            email : email,
        }).then(function(response){
            // alert(response.data.data)
            setShowDialog(true);
            // dispatch(setUserInfo(response.data.id,name,phone,email,address));
            dispatch(setUserInfo({
                id : response.data.data,
                name : name,
                phone : phone,
                address : address,
                email : email,
            })) 
            Swal.fire({
                title:  "Success!",
                text: "Registered Successful!",
                type: 'success',    
                });
            navigate(-1);
        }).catch(function(error){
            console.log(error);
        })
          
    }

  return (
    <div>
    <ColorNav/>
    <Container>
        <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        
        <Form>
            <Input type="text" id="name" name="name" placeholder="name" value={name} onChange={onNameChanged} />
            <Input type="text" id="phone" name="phone" placeholder="phone" value={phone} onChange={onPhoneChanged}/>
            <Input type="text" id="email" name="email" placeholder="email" value={email} onChange={onEmailChanged}/>
            <Input type="text" id="address" name="address" placeholder="address" value={address} onChange={onAddressChanged}/>
            <Input type="text" id="username" name="username" placeholder="username" value={username} onChange={onUsernameChanged}/>
            <Input type="password" id="password" name="password" placeholder="password" value={password} onChange={onPasswordChanged}/>
            <Agreement>
                By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            
        </Form>
        <Button onClick={onRegisterClicked}>CREATE</Button>
        </Wrapper>
       <AlertDialog open={showDialog} close={()=>setShowDialog(false)} title="User Registration" content="Your user account has been successfully registered! Enjoy Shoppping!"/>
    </Container>
    <Footer/>
    </div>
  )
}

export default Register