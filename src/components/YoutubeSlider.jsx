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
    height: 340px;
    padding: 20px;
   
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


const YoutubeSlider = () => {

    const [products,setProducts] =  useState([]);
    const [utube1,setUtube1] =  useState('');
    const [utube2,setUtube2] =  useState('');
    const [utube3,setUtube3] =  useState('');
    const [utube4,setUtube4] =  useState('');

    const url= useSelector(state => state.user.url);
  
    useEffect(()=>{
      const getProducts = async () =>{
        try{
          const res = await axios.get(url+`/api/youtube`);
          console.log(res.data);
          setProducts(res.data);
          setUtube1(res.data[0].youtube_link);
          setUtube2(res.data[1].youtube_link);
          setUtube3(res.data[2].youtube_link);
          setUtube4(res.data[3].youtube_link);
        }catch(err){}
      };
      getProducts();
      
    },[]);

    return (
        <Container>
            
            <FeedBox>    
              
            <div className="card" style={{width: '33%',marginLeft:'20px'}}>
                <div style={{maxHeight: '260px',minHeight: '260px', overflow: 'hidden'}}>
                <iframe width='100%' height="260" src={utube1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div> 
            <div className="card" style={{width: '33%',marginLeft:'20px'}}>
                <div style={{maxHeight: '260px',minHeight: '260px', overflow: 'hidden'}}>
                <iframe width='100%'  height="260" src={utube2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div> 
            <div className="card" style={{width: '33%',marginLeft:'20px'}}>
                <div style={{maxHeight: '260px',minHeight: '260px', overflow: 'hidden'}}>
                <iframe width='100%'  height="260" src={utube3} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div> 
              {/* <div className='row'>
                 <div width="200" height="450">
                    <span style={{color:'white'}}>Hello</span>
                 </div>
              </div>
              <div className='row'>
                  <div className='col-12'>
                  <iframe  height="250" src={utube2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                  <div className='col-12'>
                  <iframe  width="400" height="222" src={utube3} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
              </div> */}
            
            
            {/* <iframe width="30%" height="225" src="https://www.youtube.com/embed/Uo_FrgizhuY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            
            
                            {/* <Carousel>
                            {
                            products.map((el)=>(
                                <>
                                <div style={{maxHeight:'600px'}} key={el.id} width="100%">
                                <iframe height="450" src={el.youtube_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
            
                                </>
                                ))
                            }
                            </Carousel> */}
                            
                  
             
            </FeedBox>
        </Container>
    )
}

export default YoutubeSlider;