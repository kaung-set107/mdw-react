import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import family from '../feedImg/family.jpg'
import brandedms from '../feedImg/brandedms.jpg'
import wcoat from '../feedImg/wcoat.jpg'
import shoe from '../feedImg/shoe.jpg'
import axios from 'axios'
import { DataObjectTwoTone } from '@mui/icons-material'
import { useSelector} from 'react-redux'
import ImageSlider, { Slide } from "react-auto-image-slider";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';


const Container = styled.div`
    width: 100%;
    height: 250px;
    padding: 10px;
    margin-left: 10px;
    margin-bottom: 50px;
`
const FeedBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    padding: 20px;
    
`
const SectionTitle = styled.h2`
    font-weight: bold;
    font-size:30px;
    margin-left: 20px;
    color: #2b57b8;
`


const PromotionPhoto = () => {

    const [products,setProducts] =  useState([]);
    const url= useSelector(state => state.user.url);
  
    useEffect(()=>{
      const getProducts = async () =>{
        try{
          const res = await axios.get(url+`/api/promotionphoto`);
          console.log(res.data);
          setProducts(res.data);
          
        }catch(err){}
      };
      getProducts();
      
    },[]);

    return (
        <Container>
            
            <FeedBox>    
                    
            <ImageSlider effectDelay={500} autoPlayDelay={2000}>
                            {
                            products.map((el)=>(
                                <>
                                {/* <div style={{maxHeight:'210px'}} key={el.id}> */}
                                {/* <img  src={url+'/promotion_images/'+el.promotionphoto_photo} key={el.id} width="100%"/> */}
                                <Slide>
                                <img  src={url+'/promotion_images/'+el.promotionphoto_photo} style={{maxHeight:'210px'}}/>
                                </Slide>
                                {/* </div> */}
                                {/* <h5 className="card-title text-center mt-2" style={{ opacity: 0.5,color:'#2b57b8'}}>{el.promotionphoto_title}</h5> */}
                                </>
                                ))
                            }
            </ImageSlider>
             
            </FeedBox>
        </Container>
    )
}

export default PromotionPhoto;