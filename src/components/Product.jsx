import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useEffect, useState } from 'react'
import useCollapse from 'react-collapsed';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector} from 'react-redux'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    width: 1070px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index:2;
    margin-bottom: 50px;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
       background-color: #e9f5f5;
    transform: scale(1.1);
    }
`
const ProductLineTitle = styled.h2`
    font-weight: bold;
    font-size:30px;
    margin-left:50px;
    position: absolute;
    bottom: 10%;
    
`
const Button = styled.button`
    margin-left:50px;
    position: absolute;
    bottom: 3%; 
`

const ImgContainer = styled.div`
    max-height: 350px;
`
const SmallImgContainer = styled.div`
   
`
const SmallImage = styled.img`
    width: 250px;
    max-height: 250pz;
    margin-top: 25px;
    object-fit: contain;
  
`
const SmallImgName = styled.span`
    font-size: 20px;'
    color: #111111;
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    
`

const SmallImgContainerOne = styled.div`
    max-width: 70vw;
    display: flex;
    overflow-y: hidden; 
    overflow-x: scroll;
    min-width: 350px;
    object-fit: cover;
   
`
const Divh = styled.div`
&:hover ${Info}{
    opacity: 1;
}
`

const Product = ({ item }, props) => {

    const { getCollapseProps, getToggleProps } = useCollapse();
    const [items, setItems] = useState([{}]);
    const [itemss, setItemss] = useState('');
    const url= useSelector(state => state.user.url);

    useEffect(()=>{
        const getItem = async () =>{
          try{

            const res = await axios.get(url+`/api/item_api/${item.id}`);
            console.log('hello');
            // console.log(res.data.id);
            setItemss(res.data.id);

          }catch(err){}
        };
        getItem();
        
      },[]);

    const collapse = () => {
        const obj = { 'category_id': item.category_id, 'subcategory_id': item.id }
        axios.post(url+'/api/productlineitems_api', obj)
            .then(res => {
                setItems(res.data);
                console.log(res.data[0]);
            }).catch(err => {
                console.log(err);
            })
    };

    return (
        <div className="collapsible" onClick={collapse}>

            <Container className="header" {...getToggleProps()}>
                <Circle />
                <Image src={url+`/ecommerce/product_lines/${item.photo_path}`} />
                <Info>
                    <Icon><ShoppingCartOutlined /></Icon>
                    <Icon><Link to={`/product/${itemss}`}><SearchOutlined /></Link></Icon>
                    <Icon><FavoriteBorderOutlined /></Icon>
                </Info>
                <ProductLineTitle >{item.name}</ProductLineTitle>
                <Button>SHOP NOW</Button>
            </Container>  

            <Wrapper {...getCollapseProps()}>
                <ImgContainer>
                    <SmallImgContainerOne>
                        {items.map((it) => (
                            // .slice(0, 6)
                            <div style={{ display: 'inline-block' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'inline-block' }}>
                                        
                                        <Link to={`/product/${it.id}`}><SmallImage src={url+`/ecommerce/items/${it.photo_path}`} key={it.id} />

                                        </Link>
                                       
                                    </div>
                                    <div style={{ textAlign: 'center', maxWidth: '250px', display: 'inline-block' }}>
                                        <span>{it.item_name}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </SmallImgContainerOne>
                </ImgContainer>
            </Wrapper>

        </div>

    )
}

export default Product