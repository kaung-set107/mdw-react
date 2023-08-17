import React, { useState,useRef,useEffect,useContext } from 'react'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import {mobile} from "../responsive"
import { useDispatch,useSelector } from 'react-redux'
import {setUserInfo} from "../redux/userRedux"
import AuthContext from '../redux/AuthProvider'
import axios from 'axios'
import { red } from '@mui/material/colors'
import {
    useNavigate,useLocation
  } from "react-router-dom";
import { Link } from 'react-router-dom'
import ColorNav from '../components/ColorNav'
import Footer from '../components/Footer'
import Swal from 'sweetalert2'

// url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
`
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
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #32549b;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`

const Error = styled.span`
    color: red;
`

const A = styled.a`

`

const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [errmsg,setErrmsg] = useState("");
    const [navi,setNavi] = useState("");
    const [successmsg,setSuccessmsg] = useState(false);
    const dispatch = useDispatch();
    const url= useSelector(state => state.user.url);
    const navigate = useNavigate();
    

    const background = {
        backgroundColor : 'red',
        color : 'white',
        align : 'center',
    }
    // const {isFetching,error} = useSelector((state)=>state.user)
    useEffect(()=>{
        userRef.current.focus();
    },[]);

    useEffect(()=>{
       setErrmsg('');
    },[username,password]);

    const handleClick = (e) => {
        e.preventDefault();
    
            const response = axios.post(url+'/api/Login',{
                username: username,
                password: password
            }).then(function(response){
                // console.log(response.data.user);
                if(response.data.status != 200){
                    setErrmsg(' Missing Username Or Password! ');
                    errRef.current.focus();
                }
                else{
                    // alert('error');
                    const access_token = response?.data?.access_token;
                    setAuth({username,password,access_token});
                    setUsername('');
                    setPassword('');
                    setSuccessmsg(true);
                    navigate(-1);
                    dispatch(setUserInfo({
                        id : response.data.user.id,
                        name : response.data.user.name,
                        phone : response.data.user.phone,
                        address : response.data.user.address,
                        email : response.data.user.email,
                    }))   
                    Swal.fire({
                        title:  "Success!",
                        text: "Login Successful!",
                        type: 'success',    
                    });
                }
                
            })

        // login(dispatch,{username,password});
    }
    
  return (
    <>
    { successmsg ? (
      ''
    ) : (
        <>
    <ColorNav/>
    <Container>
         <Wrapper> 
        <p ref={errRef} className={errmsg ? "errmsg" : "offscreen"} aria-live='assertive' style={background}>{errmsg}</p>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="user name" ref={userRef} autoComplete='off' onChange={(e)=>setUsername(e.target.value)} value={username} required/>
            <Input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} value={password} required/>
            {/* <Button onClick={handleClick} disabled={isFetching}>LOG IN</Button>
            {error && <Error>Incorrect Username and Password...</Error>} */}
            <Button onClick={handleClick}>LOG IN</Button>

            <A>DO YOU REMEMBER THE PASSWORD?</A>
            <Link to='/register'>CREATE NEW ACCOUNT</Link>

        </Form>
        </Wrapper>
    </Container>
    <Footer/>
    </>
    )} 
   </>
  )
}

export default Login