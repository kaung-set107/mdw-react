import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { mobile } from "../responsive";
import kbzbank from '../files/kbzbank.png'
import aya from '../files/aya.jpg'
import cbpay from '../files/cbpay.jpg'
import kbzpay from '../files/kbzpay.png'
import wave from '../files/wave.png'
import master from '../files/master.png'
import visa from '../files/visa.jpg'

const Container = styled.div`
    display: flex;
    background-color: #dddddd;
    ${mobile({ flexDirection: "column" })}
`
const Logo = styled.h2`
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #dddddd;
`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.bgc};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    background-color: #dddddd;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    text-align: left;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    background-color: #dddddd;
    ${mobile({ backgroundColor: "#dddddd" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 15px;
`
const Payment = styled.img`
    width: 50%;
`
const PaymentContainer = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-between;
    flex-direction: row;
`
const PaymentBox = styled.div`
    width: 40px;
`
const Logop = styled.img`
  width: 100%;
`

const Footer = () => {
    return (
        <Container  style={{padding: '0px 20px'}}>
            <Left>
                <Logo>Medical World</Logo>
                <Description>
                Medical World Co., Ltd, founded in 2015, is a manufacturing and distribution company of uniforms 
                and accessories. Over the past 7 years, Medical World Co., Ltd, has been providing uniforms and 
                accessories for Government Departments and Private Business Sectors.
            </Description>
                <SocialContainer>
                    <SocialIcon bgc="3B5999">
                        <a href='https://www.facebook.com/FamilyHospitalUniform' style={{ color: 'white' }}><FacebookIcon /></a>
                    </SocialIcon>
                    <SocialIcon bgc="E60023">
                        <a href='#' style={{ color: 'white' }}><YouTubeIcon /></a>
                    </SocialIcon>
                    <SocialIcon bgc="E4405F">
                        <a href='#' style={{ color: 'white' }}><InstagramIcon /></a>
                    </SocialIcon >
                    <SocialIcon bgc="55ACEE">
                        <a href='#' style={{ color: 'white' }}><TwitterIcon /></a>
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem><Link to="/" style={{textDecoration: 'none', color: '#32549b'}}>Home</Link></ListItem>
                    <ListItem><Link to="/about-us" style={{textDecoration: 'none', color: '#32549b'}}>About Us</Link></ListItem>
                    <ListItem><Link to="/contact-us" style={{textDecoration: 'none', color: '#32549b'}}>Contact Us</Link></ListItem>
                    <ListItem><Link to="/login" style={{textDecoration: 'none', color: '#32549b'}}>Login</Link></ListItem>
                    <ListItem><Link to="/register" style={{textDecoration: 'none', color: '#32549b'}}>Regitster</Link></ListItem>
                    <ListItem><Link to="/cart" style={{textDecoration: 'none', color: '#32549b'}}>My Cart</Link></ListItem>
                    <ListItem><Link to="/user-profile" style={{textDecoration: 'none', color: '#32549b'}}>My Account</Link></ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style={{ marginRight: "10px" }} />
                    No.28, Hlaing Yadanar Mon 3rd Street, Hlaing Yadanar Mon Avenue, Hlaing Township, Yangon
                </ContactItem>

                <ContactItem>
                    <PhoneIcon style={{ marginRight: "10px" }} />
                    +95 9 44 88 33 457 , + 95 9 44 88 33 467 , 09 777005863, 09 777005864
                </ContactItem>

                <ContactItem>
                    <EmailIcon style={{ marginRight: "10px" }} />
                    <a href="mailto:information.medicalworld@gmail.com">information.medicalworld@gmail.com</a>
                </ContactItem>
                <PaymentContainer>
                    <PaymentBox style={{width: '60px'}}><Logop src={master}/></PaymentBox>
                    <PaymentBox style={{width: '60px', marginRight: '30px'}}><Logop src={visa}/></PaymentBox>
                    <PaymentBox><Logop src={kbzbank}/></PaymentBox>
                    <PaymentBox><Logop src={aya}/></PaymentBox>
                    <PaymentBox><Logop src={cbpay}/></PaymentBox>
                    <PaymentBox><Logop src={kbzpay}/></PaymentBox>
                    <PaymentBox><Logop src={wave}/></PaymentBox>
                </PaymentContainer>
            </Right>
        </Container>
    )
}

export default Footer