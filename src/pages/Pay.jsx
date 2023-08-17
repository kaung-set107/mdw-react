import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useState,useEffect} from "react"
import axios from 'axios'
import { useSelector} from 'react-redux'

const KEY="pk_test_51LLW5lANJYoHXqcG0iFDdeP2FlV6XBElZg7J0TLlbZKrdpdcA5aAEBqVPWYo2juFuqWZ3gbxEaeWnWh5p9J46vcC005CtZVT4D"

const Pay = () => {

    const [stripeToken,setStripeToken] = useState(null);
    const url= useSelector(state => state.user.url);

    const onToken = (token) => {
        console.log(token);
       setStripeToken(token);
    }

    useEffect(()=>{
        const makeRequest= async () => {
            try{
                const res = await axios.post("http://localhost:5000/api/checkout/payment",
                {
                    tokenId: stripeToken.id,
                    amount: 2000,
                }
                );
                console.log(res.data);
            }catch(err){
                console.log(err)
            }
        };
        stripeToken && makeRequest();
    },[stripeToken]);

  return (
    <div
        style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}
    >
        <StripeCheckout
            name="kwintech"
            image={url+"/files/attachments/medical_world_logo.jpg"}
            billingAddress
            shippingAddress
            description="Your total is @20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}

        >
        <button 
            style = {{
                border: "none",
                width: 120,
                borderRadius: 5,
                padding: "20px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "600",
                cursor: "pointer"
            }}
        >
            Pay
        </button>
        </StripeCheckout>
    </div>
  )
}

export default Pay