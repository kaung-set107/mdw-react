
import React  from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ColorNav from '../components/ColorNav';
import Footer from '../components/Footer';

const Div = styled.div`
    margin-top: 65px;
`
const Wrapper = styled.div`
    widtr: 100vw;
    height: auto;
    min-height: 100vh;
    padding: 50px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({padding: '50'})}
`
const Title = styled.h2`
    margin-bottom: 20px;
    text-align: center;
`
const Description = styled.div`
    width: 70%;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
    ${mobile({textAlign: "center"})}
`
const Form = styled.form`
    width: 400px;
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    min-height: 30px;
    margin: 10px 0px;
    padding: 5px;
`
const Message = styled.textarea`
    flex: 1;
    min-width: 40%;
    min-height: 100px;
    margin: 10px 0px;
    padding: 5px;
`
const Button = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    background-color: #32549b;
    color: white;
    cursor: pointer;
    margin-top: 20px;
`

const Profile = () => {

    const username = useSelector(state => state.user);

    
 
    return (
        
        <div>
            <div>
                <ColorNav/>
            </div>
            <Div>
                <Wrapper>
                    <Title>User Profile</Title>
                    <Description>Your Account Information</Description>
                    <Form>
                        <div>
                            <label>User Name</label>
                            <Input type="text" name='name' placeholder="" value={username.name} className='w-100'/>
                        </div>
                        <div className='mt-2'>
                            <label>User Email</label>
                            <Input type="text" name='email' placeholder="" value={username.email} className='w-100'/>
                        </div>
                        <div className='mt-2'>
                            <label>User Phone</label>
                            <Input type="text" name='email' placeholder="" value={username.phone} className='w-100'/>
                        </div>
                        <div className='mt-2'>
                            <label>User Address</label>
                            <Message name='message' placeholder='' value={username.address} className='w-100'/>
                        </div>
                        {/* <Button>Update Profile</Button> */}
                    </Form>
                </Wrapper>
            </Div>
            <div>
                <Footer/>
            </div>
        </div>

    );

}

export default Profile;
