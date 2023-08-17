
import React  from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ColorNav from '../components/ColorNav';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser'; 
import { useSelector} from 'react-redux'

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
    min-height: 130px;
    margin: 10px 0px;
    padding: 5px;
`
const Check = styled.input`
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-top: 20px;
    margin-right: 10px;
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

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subscribe, setSubscribe] = useState('');
    const url= useSelector(state => state.user.url);

    const didSubscribe = subscribe == 'checked' ? '1' : '0';

    const data = {
        name: name,
        email :email,
        message: message,
        subscribe_flag: didSubscribe
    }


    const SendMessage = (e) => {
        e.preventDefault();
        axios.post(url+'/api/contact_message', data)

        emailjs.sendForm('service_79e361n', 'template_pt919ms', e.target, 'plkqX8v0BRW5x7pd8')
        .then((result) => {
            alert('Email sent successfully');
            setName('');
            setEmail('');
            setMessage('');
            setSubscribe('');
        }, (error) => {
            alert('Fail to send email');
        });
    }
 
    return (
        
        <div>
            <div>
                <ColorNav/>
            </div>
            <Div>
                <Wrapper>
                    <Title>Contact Us</Title>
                    <Description>Feels free to ask anything...</Description>
                    <Form onSubmit={SendMessage}>
                        <Input type="text" name='name' placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        <Input type="text" name='email' placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <Message name='message' placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                        <div>
                            <Check id="check" type="checkbox" onChange={(e)=>setSubscribe('checked')} style={{display: 'inline-block'}}/>
                            <label for="check" style={{cursor: 'pointer'}}>Subscribe for Update News</label>
                        </div>
                        <Button>Send Message</Button>
                    </Form>
                </Wrapper>
            </Div>
            <div>
                <Footer/>
            </div>
        </div>

    );

}

export default Contact;
