import { Add, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useLocation,Link} from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'
import { publicRequest } from '../requestMethod'
import { mobile } from "../responsive"
import { addProduct } from "../redux/cartRedux"
import { addOrder} from "../redux/designRedux"
import { } from "../redux/designRedux"
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { prettyDOM } from '@testing-library/react'
import CheckColor from '../components/CheckColor'
import CheckSize from '../components/CheckSize'
import CheckFabric from '../components/CheckFabric'
import sample from '../files/sample.pdf'
import Swal from 'sweetalert2'
import InstockDialog from '../components/InstockDialog'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`
const SmallImgContainer = styled.div`
    display: flex;
    margin-top: 20px;
`

const SmallImgContainerOne = styled.div`
    max-width: 90vw;
    display: flex;
    overflow-y: hidden; 
    overflow-x: scroll; 
`

const Input = styled.input`
`
const Lable = styled.label`
    font-size : 18px;
`

const MainImage = styled.img`
    width: 500px;
    height: auto;
    object-fit: contain;
    
    ${mobile({ height: "50%" })}
`
const SmallImage = styled.img`
    width: 34%;
    height: auto;
    max-height: 191.5px;
    object-fit: cover;
    ${mobile({ height: "50%" })}
`

const SmallImageOne = styled.img`
    width: 100%;
    min-width: 250px;
    min-height: 250px;
    max-height: 250px;
    object-fit: contain;
    ${mobile({ height: "50%" })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`

const RowContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`

const PriceLabel = styled.label`
    font-size: 25px;
    font-weight:bold;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 25px;
    margin-left: 10px;
`

const StockLabel = styled.label`
    font-size: 25px;
    font-weight:bold;
    margin-left:10px;
`

const Stock = styled.span`
    font-weight: 100;
    font-size: 25px;
    margin-left:10px;
`

const ItemTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`

const Filter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterColorOption = styled.option``
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const FilterFabric = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterFabricOption = styled.option``

const AddContainer = styled.div`
width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius:10px;
    border: 1px solid teal; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding:10px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: teal;
        color: white;
    }
`
const DivF = styled.div`
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: center;
`
const Check = styled.p`
    background-color: #027f9d;
    margin-left: 5px;
    color: #ffffff;
    border-radius: 3px;
    padding:3px;
    cursor: pointer;
`

const ProductCatelog = styled.p`
    font-size: 20px;
    color: #027f9d;
    margin-top: 30px;
    padding-left: 20px;
    border-radius: 3px;
    cursor: pointer;
`
const DownloadPdf = styled.a`
    font-size: 20px;
    color: #027f9d;
    text-decoration: none;
    margin-top: 30px;
    padding-left: 20px;
    border-radius: 3px;
    cursor: pointer;
`
const SmallImgName = styled.div`
    font-size: 20px;'
    color: #111111;
`

const Opt = styled.option`

`


const Product = () => {

    const [checkColor, setCheckColor] = useState(false);
    const [checkSize, setCheckSize] = useState(false);
    const [checkFabric, setCheckFabric] = useState(false);
    const dispatch = useDispatch();
    const url= useSelector(state => state.user.url);
    
    // State Colors
    const colors= useSelector(state => state.design.colors);
    // console.log(colors);

    const cheColor = () => {
        setCheckColor(true);
    }
    const cheSize = () => {
        setCheckSize(true);
    }
    const cheFabric = () => {
        setCheckFabric(true);
    }

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [item, setItem] = useState([]);
    const [relateditems, setRelatedItems] = useState([]);
    const [units, setUnits] = useState([]);
    const [unitid, setUnitId] = useState(0);
    const [unitname, setUnitName] = useState('');
    const [unitcode, setUnitCode] = useState('');
    const [unitimg, setUnitImg] = useState('default.png');
    const [quantity, setQuantity] = useState(1);
    const [gendername, setGenderName] = useState('');
    const [color, setColor] = useState();
    const [fabric, setFabric] = useState('');
    const [size, setSize] = useState("xxlf");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [design, setDesign] = useState('');
    const [isInstock, setIsInstock] = useState(false);

    const [instockFlag, setInstockFlag] = useState("");
    const [preorderFlag, setPreorderFlag] = useState("");

    
    useEffect(() => {
        const getProduct = () => {
            axios.get(url+"/api/unitbyid_api/" + id)
            // axios.get("http://localhost:8000/api/unitbyid_api/" + id)
                .then((response) => {
                    setItem(response.data.item);
                    setDesign(response.data.item.item_name);
                    setUnits(response.data.counting_units);

                    setInstockFlag(response.data.valueofinstock);
                    console.log('hay');
                    console.log(response.data.valueofinstock);

                    setPreorderFlag(response.data.valueofpreorder);
                    console.log(preorderFlag);

                    const obj = {
                        'category_id': response.data.item.category_id,
                        'subcategory_id': response.data.item.sub_category_id,
                        'item_id': response.data.item.id,
                    }

                    axios.post(url+'/api/productlineitems_api', obj)
                    // axios.post('http://localhost:8000/api/productlineitems_api', obj)
                        .then(res => {
                            setRelatedItems(res.data);
                            console.log(res.data);
                        }).catch(err => {
                            console.log(err);
                        })

                    }).catch((error) => console.log(error));
                    

        }
        getProduct();
    }, [id]);

    useEffect(() => {
        // customer change specification
        units.map((unit) => {
            if (unit.size_name == size && unit.colour_name == color && unit.fabric_name == fabric) {
                // setPrice(unit.order_price);
                // setStock(unit.current_quantity);
                setUnitId(unit.id);
                setUnitName(unit.unit_name);
                setUnitCode(unit.unit_code);
                return 1;
            }
        })
    }, [color, fabric, size]);
    // console.log(color)
    // console.log(size)
    // console.log(fabric)

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    const [butBackColor, setBututBackColor] = useState('white');
    const [butColor, setBututColor] = useState('teal');

    const [isClickCart, setisClickCart] = useState(false);

    const handleClick = () => {
        if(stock == 0){
            setIsInstock(true);
            let testname = item.item_name+' '+gendername+' '+fabric+' '+color+' '+size;
            let testqty = quantity;
            let testprice = price;
            let orderid  = unitid;
            // alert(testname,testqty);
            dispatch(addOrder({orderid,testname,testqty,testprice}));
        }else{
            dispatch(addProduct({ unitid, unitname, unitcode, unitimg, color, size, fabric, quantity, price }));
            Swal.fire({
                title:  "Success!",
                text: "Successfully Add to Cart.",
                type: 'success',    
                });
        }

        // document.getElementById("success").innerHTML = 'Success';
        // setBututBackColor('#027f9d');
        // setBututColor('white');

    }

    const change_photo = () => {
        const hel = document.getElementById('hel').src;
        const main = document.getElementById('main').src;
        document.getElementById('hel').src = main;
        document.getElementById('main').src = hel;
    }

    const choosegen = (val) => {
        let gen;let gname;let html = '';
    if(val == 1){
       setGenderName('m');
       gname = 'm';
       gen = 'male';
    }
    if(val == 2){
        setGenderName('f');
        gname = 'f';
        gen = 'female';
    }
    if(val == 3){
        setGenderName('un');
        gname = 'un';
        gen = 'unisex';
    }

    axios.get(url+'/api/ecommerce_order_type/'+item.item_name+'/'+gname)
                .then((response) => {  
                    console.log(response.data.fabric.length);
                    if(response.data.fabric.length == 0){
                        Swal.fire({
                            title:  "Warning!",
                            text: "This Design has no for "+gen+'.',
                            type: 'error',    
                            });
                    }else{
                        html += `<Option>Choose Fabric</Option>`;
                        Object.keys(response.data.fabric).map(key => {
                            html += `<Option>`+ response.data.fabric[key]+`</Option>`;
                            })
                        
                    document.getElementById('fabric').innerHTML = html;
                    }
        })
    }

    const ChangeFabric = (val) =>{
        setFabric(val);
        let html = '';
        axios.get(url+'/api/ecommerce_order_type1/'+item.item_name+'/'+gendername+'/'+val)
                .then((response) => {

                    html += `<Option>Choose Color</Option>`;

                    // Object.keys(colors).map(c => { // from design redux colors
                    //     html += `<Option>`+ c +`</Option>`;
                    //     console.log(c)
                    // })
                    
                    Object.keys(response.data.colour).map(key => {
                        html += `<Option>`+ response.data.colour[key]+`</Option>`;
                    }) 
                    document.getElementById('color').innerHTML = html;
        })
    }

    const ChangeColor = (val) =>{
        setColor(val);
        let html = '';
        axios.get(url+'/api/ecommerce_order_type/'+item.item_name+'/'+gendername+'/'+fabric+'/'+val)
                .then((response) => {
                    console.log(response.data.size);
                    html += `<Option>Choose Size</Option>`;
                        Object.keys(response.data.size)
                        Object.keys(response.data.size).map(key => {
                            html += `<Option>`+ response.data.size[key]+`</Option>`;
                        })
                     
                    document.getElementById('size').innerHTML = html;
        })
    }

    const ChangeSize = (val) =>{
        setSize(val);

        const counting =  item.item_name+' '+gendername+' '+fabric+' '+color+' '+val;
        axios.post(url+'/api/showprice',{
               unit: counting       
        }).then(res=>
        {
            // alert('success');
            // Swal.fire({
            //     title:  "Success!",
            //     text: "Success!.",
            //     type: 'success',    
            //     });
            document.getElementById('price').innerHTML = res.data.data+` MMK`;
            document.getElementById('stock').innerHTML = res.data.stock+` PCS`;
            setPrice(res.data.data);
            setStock(res.data.stock);
        }
        ).catch(err =>{
            console.log('error');
        });
    }

    return (
        <Container>
            <Navbar />
            {/* <Slider/> */}
            {/* <Announcement/> */}
            <Wrapper style={{ marginTop: '100px' }}>
                <ImgContainer>

                    <MainImage src={url+`/ecommerce/items/${item.photo_path}`} id='main' />

                    <SmallImgContainer>
                        <SmallImage src={url+`/ecommerce/items/${item.photo_path?.replace("front", "left")}`} onClick={change_photo} id='' />
                        <SmallImage src={url+`/ecommerce/items/${item.photo_path?.replace("front", "right")}`} onClick={change_photo} id='' />
                        <SmallImage src={url+`/ecommerce/items/${item.photo_path?.replace("front", "body")}`} onClick={change_photo} id='hel' />
                    </SmallImgContainer>

                </ImgContainer>
                <InfoContainer>
                    <Title id="item_name">{item.item_name}</Title>
                    <Desc>Minimum Order Quantity : </Desc>
                    <Desc>Avaiable Color : </Desc>
                    <Desc>Lead Time : </Desc>
                    {
                    preorderFlag == 1 ? <Link to={'/order/'+item.item_name}><Button>Make Order</Button></Link> : 'Preorder Unavaliable!'
                    }
                    <RowContainer>
                        <PriceLabel>Price: </PriceLabel>
                        <Price id='price'> &nbsp;MMK</Price>
                        <StockLabel>Stock: </StockLabel>
                        <Stock id='stock'> &nbsp;PCS</Stock>
                    </RowContainer>
                    <FilterContainer>
                    <Filter className='float-left'>
                            <FilterTitle>Gender</FilterTitle>
                            <DivF>
                            <Input  type="radio" name="genderdata" id='r1' onClick={()=>choosegen(1)}></Input>
                            <Lable className='mt-2 px-2'>Male</Lable>
                            <Input  type="radio" name="genderdata" id='r2' onClick={()=>choosegen(2)}></Input>
                            <Lable className='mt-2 px-2'>Female</Lable>
                            <Input  type="radio" name="genderdata" id='r3' onClick={()=>choosegen(3)}></Input>
                            <Lable className='mt-2 px-2'>Uni</Lable><br></br><br></br>
                            </DivF>
                    </Filter>
                    </FilterContainer>
                    
                    <FilterContainer>
                    <Filter>
                            <FilterTitle>Fabric</FilterTitle>
                            <DivF>
                                <div>
                                    <FilterFabric onChange={(e) => ChangeFabric(e.target.value)} id="fabric">
                                        <Opt>Choose Fabric</Opt>
                                    </FilterFabric>
                                </div>
                                
                            </DivF>
                        </Filter>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <DivF>
                                <div>
                                    <FilterColor onChange={(e) => ChangeColor(e.target.value)} id="color">
                                    <Opt>Choose Color</Opt>
                                    </FilterColor>
                                </div>
                                <div>
                                    <Check onClick={cheColor} style={{ display: 'inline-block' }}>Check</Check>
                                </div>
                            </DivF>

                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <DivF>
                                <div>
                                    <FilterSize onChange={(e) => ChangeSize(e.target.value)} id="size">
                                    <Opt>Choose Size</Opt>
                                    </FilterSize>
                                </div>
                                <div>
                                    <Check onClick={cheSize} style={{ display: 'inline-block' }}>Check</Check>
                                </div>
                            </DivF>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>

                        {
                        instockFlag == 1 ? <Button onClick={handleClick} style={{ backgroundColor: butBackColor, color: butColor }}>Add to Cart</Button> : 'Stock Unavaliable!'
                        }
                    
                    </AddContainer>

                    <AddContainer>
                        <DownloadPdf href={sample} download>Download Catalog</DownloadPdf>
                    </AddContainer>

                    <AddContainer>
                        <p id="success" className='mx-3'></p>
                    </AddContainer>


                </InfoContainer>
            </Wrapper>
            <Container className='text-center'>
                <Title>Related Items</Title>
            </Container>
            <Wrapper>
                <ImgContainer>
                    <SmallImgContainerOne>

                        {relateditems.map((it) => (
                            <div>
                                <div>
                                    <Link to={`/product/${it.id}`}><SmallImageOne src={url+`/ecommerce/items/${it.photo_path}`} key={it.id} /></Link>
                                    {/* <SmallImageOne src={`http://localhost:8000/ecommerce/items/${it.photo_path}`} key={it.id} /> */}
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    <SmallImgName>{it.item_name ? it.item_name : it.name}</SmallImgName>
                                </div>
                            </div>
                        ))}

                    </SmallImgContainerOne>
                    

                </ImgContainer>
            </Wrapper>
            {/* <Newsletter /> */}
            <Footer />

            <CheckColor name={color} open={checkColor} close={() => setCheckColor(false)}/>
            <CheckSize gender={size} type={design} open={checkSize} close={() => setCheckSize(false)} />
            
            <InstockDialog open={isInstock} close={()=>setIsInstock(false)}/>
            {/* <CheckFabric open={checkFabric} close={() => setCheckFabric(false)} /> */}
        </Container>
    )
}

export default Product