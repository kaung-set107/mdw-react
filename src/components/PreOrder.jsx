import React, { useEffect, useState } from 'react'
import ColorNav from './ColorNav';
import Footer from './Footer';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { Add,Remove, SettingsEthernet } from '@mui/icons-material'
import axios from 'axios'
import { useLocation ,useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addOrder,removeOrder,addAttach,removeAttach,resetOrder,resetAttach,editOrder,editAttach } from "../redux/designRedux"
import Swal from 'sweetalert2'
import BankInfoDialog from './BankInfoDialog'
import PaidInfoDialog from './PaidInfoDialog'
import CheckColor from '../components/CheckColor'

const Div = styled.div`
margin-top: 30px;
 width : 80%;
 height : auto;
`
const Title = styled.h4`
margin-top: 20px;
text-align : center;
`
const Wrapper = styled.div`
    widtr: 100vw;
    height: auto;
    min-height: 100vh;
    padding: 50px;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({padding: '50'})}
`
const Lable = styled.label`
    font-size : 18px;
`
const Text = styled.span`
    font-size : 18px;
    text-align : center;
    margin-top: 20px;  
`
const Text1 = styled.span`
padding: 5px 15px;
color: #32549b;
font-size : 20px;
font-weight : bold;
font-style: oblique;
`
const Input = styled.input`
`
const A = styled.a`
`

const Button = styled.button`
    padding:8px;
    background-color: teal;
    border : none;
    border-radius : 15px;
    cursor: pointer;
    float: right;
    color: white;   
`
const Btn = styled.button`
padding:4px;
background-color: #32549b;
border : none;
border-radius: 20px;
color: white; 
`

const Check = styled.p`
    background-color: #027f9d;
    margin-left: 7px;
    color: #ffffff;
    border-radius: 3px;
    padding:3px;
    cursor: pointer;
`

const Delete = styled.button`
background-color: #32549b;
border : none;
border-radius: 20px;
width: 70px;
height: 30px;
margin-top: 3px;
color: white; 
`
const Cancel = styled.button`
background-color: red;
border : none;
border-radius: 20px;
width: 70px;
height: 30px;
margin-top: 3px;
color: white; 
`

const Edit = styled.button`
background-color: #e69b00;
border : none;
border-radius: 20px;
width: 70px;
height: 30px;
margin-top: 3px;
color: white; 
`

const Save = styled.button`
background-color: #32549b;
border : none;
border-radius: 10px;
width: 110px;
height: 35px;
margin-top: 3px;
color: white; 
margin-left : 450px;
margin-bottom: 50px;
`
const Select = styled.select`
padding: 4px;
width: 200px;
`
const Select1 = styled.select`

`

const Option = styled.option`

`
const Qty = styled.input`
width: 70px;
`
const MainText = styled.div`
padding: 10px 10px;
display: flex;
justify-content: space-between;
align-items: center;
transition: 0.7s ease;
${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-top: 10px;
`

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 10px
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
    margin-left : 20px;
   
`

const Order = () => {
    const location = useLocation();
    const design_id = location.pathname.split("/")[2];
    let [count,setCount] = useState(1);
    const [paymentchannel, setPaymentChannel] = useState('');
    const [paymenttype, setPaymentType] = useState('');
    const [check,setCheck] = useState(false);
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const [files, setFiles] = useState('');
    const dispatch = useDispatch();
    const pre = useSelector(state=>state.design.orders);
    const preattach = useSelector(state=>state.design.attachs);
    const photo = useSelector(state=>state.design.paymentscreenshot);
    console.log( useSelector(state=>state.design.paymentscreenshot));
    const username = useSelector(state => state.user);
    const edittestname = useSelector(state=>state.design.edit_testname);
    const edittestqty = useSelector(state=>state.design.edit_testqty);
    const editdescription = useSelector(state=>state.design.edit_description);
    const editfile = useSelector(state=>state.design.edit_file);
    const edittestprice = useSelector(state=>state.design.edit_testprice);
    const [checkColor, setCheckColor] = useState(false);
    const navigate = useNavigate();
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    const onPaymentChannelChanged = (e) => setPaymentChannel(e.target.value);
    const onPaymentType = (e) => setPaymentType(e.target.value);

    const [showBankInfo, setshowBankInfo] = useState(false);
    const [showPaidInfo, setshowPaidInfo] = useState(false);
    const [design_name, setDesignName] = useState('');
    const [gendername, setGenderName] = useState('');
    const [fabricname, setFabricName] = useState('');
    const [colourname, setColourName] = useState('');
    const [sizename, setSizeName] = useState('');
    const url= useSelector(state => state.user.url);
    const [eid,setEid] = useState(0);

    if(design_id == 1){
        const getDesigns = async () =>{
            try{
            let html = '';
            const res = await axios.get(url+"/api/design_api/"+design_id);
            console.log(res.data.design);
            Object.keys(res.data.design).map(key => {
                html += `<Option>`+ res.data.design[key]+`</Option>`;
                })
            
            document.getElementById('type').innerHTML = html;
            
            }catch(err){}
        };
        getDesigns();
    }
    if(design_id == 2){
        const getDesigns = async () =>{
            try{
            let html = '';
            const res = await axios.get(url+"/api/design_api/"+design_id);
            console.log(res.data.design);
            Object.keys(res.data.design).map(key => {
                html += `<Option>`+ res.data.design[key]+`</Option>`;
                })
            
            document.getElementById('type').innerHTML = html;
            
            }catch(err){}
        };
        getDesigns();
    }
    if(design_id == 3){
        const getDesigns = async () =>{
            try{
            let html = '';
            const res = await axios.get(url+"/api/design_api/"+design_id);
            console.log(res.data.design);
            Object.keys(res.data.design).map(key => {
                html += `<Option>`+ res.data.design[key]+`</Option>`;
                })
            
            document.getElementById('type').innerHTML = html;
            
            }catch(err){}
        };
        getDesigns();
    }

    const bankInfo = () => {
      setshowBankInfo(true);
    }
  
    const paidInfo = () => {
      setshowPaidInfo(true);
    }

    const cheColor = () => {
        setCheckColor(true);
    }


    const choosegen = (val) => {
        let html='';let genn;
        if(val == 1){
            const spec = 'm';
            document.getElementById('gen_name').innerHTML = spec;
            genn = 'male';
        }
        if(val == 2){
            const spec = 'f';
            document.getElementById('gen_name').innerHTML = spec;
            genn = 'female';
        }
        if(val == 3){
            const spec = 'un';
            document.getElementById('gen_name').innerHTML = spec;
            genn = 'unisex';
        }
        const gname = document.getElementById('gen_name').innerHTML;

        setGenderName(gname);
        // alert(document.getElementById('item_name').innerHTML+' '+document.getElementById('gen_name').innerHTML);
        axios.get(url+'/api/ecommerce_order_type/'+design_name+'/'+gname)
                    .then((response) => {  
                        console.log(response.data.fabric);
                        if(response.data.fabric.length == 0){
                            Swal.fire({
                                title:  "Warning!",
                                text: "This Design has no for "+genn+'.',
                                type: 'error',    
                                });
                        }else{
                            Object.keys(response.data.fabric).map(key => {
                                html += `<Option>`+ response.data.fabric[key]+`</Option>`;
                             })
                         
                        document.getElementById('types').innerHTML = html;
                 }
            })
    }

    const addit = () => {
        const spec = document.getElementById('type').value;
        document.getElementById('item_name').innerHTML = spec;
        setDesignName(spec);
    }
    
    const additem = () =>{
        const spec = document.getElementById('types').value;
        document.getElementById('fab_name').innerHTML = ' '+spec;
        setFabricName(spec);
        let html = '';
        axios.get(url+'/api/ecommerce_order_type/'+design_name+'/'+gendername+'/'+spec)
                .then((response) => {  
                    console.log(response.data.colour);
                        Object.keys(response.data.colour).map(key => {
                            html += `<Option>`+ response.data.colour[key]+`</Option>`;
                         })
                     
                    document.getElementById('types1').innerHTML = html;
        })
        // alert(document.getElementById('item_name').innerHTML+' '+document.getElementById('gen_name').innerHTML+' '+document.getElementById('fab_name').innerHTML);
    }
    const additem1 = () =>{
        const spec = document.getElementById('types1').value;
        document.getElementById('col_name').innerHTML = spec;
        setColourName(spec);
        let html = '';
        axios.get(url+'/api/ecommerce_order_type/'+design_name+'/'+gendername+'/'+fabricname+'/'+spec)
                .then((response) => {  
                    console.log(response.data.size);
                        Object.keys(response.data.size).map(key => {
                            html += `<Option>`+ response.data.size[key]+`</Option>`;
                         })
                     
                    document.getElementById('types2').innerHTML = html;
        })
        // alert(document.getElementById('item_name').innerHTML+' '+document.getElementById('gen_name').innerHTML+' '+document.getElementById('fab_name').innerHTML);
    }

    const additem2 = () =>{
        const spec = document.getElementById('types2').value;
        document.getElementById('siz_name').innerHTML = spec;
        setSizeName(spec);
    }


    const qtychange = () =>{
        if(document.getElementById('qty').value == ''){
            Swal.fire({
                title:  "Warning!",
                text: "Please Enter Quantity.",
                type: 'error',    
                });
        }else{
       let testname = design_name+' '+gendername+' '+fabricname+' '+colourname+' '+sizename;
        let testqty = document.getElementById('qty').value;
        let testprice = document.getElementById('price').value;
        setCount(++count);
        let orderid  = count;
        // alert(testname,testqty);
        dispatch(addOrder({orderid,testname,testqty,testprice}));
        document.getElementById('item_name').innerHTML = design_name;
        document.getElementById('gen_name').innerHTML = '';
        document.getElementById('fab_name').innerHTML = '';
        document.getElementById('col_name').innerHTML = '';
        document.getElementById('siz_name').innerHTML = '';
        document.getElementById('qty').value = '';
        document.getElementById('price').value = '';
        document.getElementById('types').innerHTML = '';
        document.getElementById('types1').innerHTML = '';
        document.getElementById('types2').innerHTML = '';
        document.getElementById('r1').checked = false;
        document.getElementById('r2').checked = false;
        document.getElementById('r3').checked = false;
      }
    }

    const attach = () =>{
        if(document.getElementById('qty1').value == ''){
            Swal.fire({
                title:  "Warning!",
                text: "Please Enter Quantity.",
                type: 'error',    
                });
        }else{
        let testqty = document.getElementById('qty1').value;
        let testprice = document.getElementById('price1').value;
        setCount(++count);
        let orderid  = count;
        dispatch(addAttach({orderid,file,files,description,testqty,testprice}));
        document.getElementById('qty1').value = '';
        document.getElementById('price1').value = '';
        document.getElementById('description').value = '';
        document.getElementById('file').value = '';
      }
    }

    const remove = (id) => {
    dispatch(removeOrder({id}));  
}

const removeattach = (id) => {
    dispatch(removeAttach({id}));  
}

const changeprice = ()=>{
    if(document.getElementById('item_name').innerHTML == ''){
        Swal.fire({
        title:  "Warning!",
        text: "You Need to Choose Design.",
        type: 'error',    
        });
        document.getElementById('qty').value = '';
    }
    else if(document.getElementById('gen_name').innerHTML == ''){
        Swal.fire({
        title:  "Warning!",
        text: "You Need to Choose Gender.",
        type: 'error',    
        });
        document.getElementById('qty').value = '';
    }
    else if(document.getElementById('fab_name').innerHTML == ''){
        Swal.fire({
        title:  "Warning!",
        text: "You Need to Choose Fabric.",
        type: 'error',    
        });
        document.getElementById('qty').value = '';
    }
    else if(document.getElementById('col_name').innerHTML == ''){
        Swal.fire({
        title:  "Warning!",
        text: "You Need to Choose Colour.",
        type: 'error',    
        });
        document.getElementById('qty').value = '';
    }
    else if(document.getElementById('siz_name').innerHTML == ''){
        Swal.fire({
        title:  "Warning!",
        text: "You Need to Choose Size.",
        type: 'error',    
        });
        document.getElementById('qty').value = '';
    }
    else{
        const counting =  design_name+' '+gendername+' '+fabricname+' '+colourname+' '+sizename;
    axios.post(url+'/api/showprice',{
           unit: counting       
    }).then(res=>
    {
        // alert('success');
        document.getElementById('price').value = res.data.data;
    }
    ).catch(err =>{
        console.log('error');
    });
    }
    

}

const savepreorder = (val) =>{
    
    let tot_qty = 0;
    console.log(tot_qty);
    if(username.name == ''){
        Swal.fire({
            title:  'Warning!',
            text: "You need to make register or sign in first.",
            type: 'success',    
          });
    }else{
        if(val == 1){
            pre.map((el) => {
                tot_qty += parseInt(el.testqty);
            })
            if(tot_qty < 30 ){
                Swal.fire({
                    title:  'Warning!',
                    text: "Minimun Order Quantity must be 30.",
                    type: 'success',    
                  });
            }else{
            storepreorder();
             sendmail(val);
            }
        }
        if(val == 2){
            preattach.map((el) => {
                tot_qty += parseInt(el.testqty);
            })
            if(tot_qty < 30 ){
                Swal.fire({
                    title:  'Warning!',
                    text: "Minimun Order Quantity must be 30.",
                    type: 'success',    
                  });
            }else{
                storeattach();
            }
            
        }
}

}   

const storepreorder = () => {
    let formdata={
        id: username.id,
        name: username.name,
        phone: username.phone,
        address: username.address,
        orders: pre,
      }
    
      const res = axios.post(url+'/api/ecommerce_preorder_store', formdata).then(function (response) {
        //   alert('success store');
          dispatch(resetOrder());
          navigate('/order_list');
        }).catch(function (error) {
          alert('fail store');
        })
}

const sendmail = (val) => {
    axios.post(url+'/api/send/invoice_email',{
        id: username.id,
        name: username.name,
        phone: username.phone,
        address: username.address,
        email: username.email,
        preorders: pre,
        attachs: preattach,
        type: val,
        }).then(response=>
        {
          console.log(response.data['message']);
          //Success Message in Sweetalert modal
          Swal.fire({
            title:  response.data['message'],
            text: "Thanks For Your Pre-Orders! Your will be delivered within four to six weeks!",
            type: 'success',    
          });
        
        }
        ).catch(err =>{
            console.log('error');
        });
}

const storeattach = () => { 
    let formdata={
        id: username.id,
        name: username.name,
        phone: username.phone,
        address: username.address,
      }
    const res = axios.post(url+'/api/ecommerce_attachorder_store', formdata).then(function (response) {
       setEid(response.data);
       preattachstore(response.data);
        }).catch(function (error) {
          alert('fail store');
        })
}

const preattachstore = (id) => {
    let totqty = 0; let totamt = 0; 
    preattach.map((el)=>{
        totqty += parseInt(el.testqty);
        totamt += parseInt(el.testprice)*parseInt(el.testqty);
        const data = {attachs: el.files,qty: el.testqty,description: el.description,price: el.testprice,totqty: totqty,totamount:totamt,
        id: id,
       }
        const config = {
            headers: {"Content-Type": "multipart/form-data"}
        }
         const res = axios.post(url+'/api/ecommerce_attach_store', data, config)
       .then(function (response) {
        //   alert('success store');
          dispatch(resetAttach());
          navigate('/order_list');
          axios.post(url+'/api/send/invoice_email',{
            id: username.id,
            name: username.name,
            phone: username.phone, 
            address: username.address,
            email: username.email,
            preorders: pre,
            attachs: preattach,
            type: 2,
            },config).then(response=>
            {
              console.log(response.data['message']);
              //Success Message in Sweetalert modal
              Swal.fire({
                title:  response.data['message'],
                text: "Thanks For Your Pre-Orders! Your will be delivered within four to six weeks!",
                type: 'success',    
              });
            
            }
            ).catch(err =>{
                console.log('error');
            });
        }).catch(function (error) {
          alert('fail store');
        })
    })
}

const edit = (id) => {
    dispatch(editOrder({id}));
    const fullname = edittestname.split(" ");
    document.getElementById('item_name').innerHTML = design_name;
    document.getElementById('gen_name').innerHTML = fullname[1];
    document.getElementById('fab_name').innerHTML = fullname[2];
    document.getElementById('col_name').innerHTML = fullname[3];
    document.getElementById('siz_name').innerHTML = fullname[4];
    document.getElementById('qty').value = edittestqty;
    document.getElementById('price').value = edittestprice; 
}

const editattach = (id) => {
    dispatch(editAttach({id}));
    document.getElementById('qty1').value = edittestqty;
    document.getElementById('description').value = editdescription;
    document.getElementById('price1').value = edittestprice; 
    document.getElementById('file').src = editfile;
}

const changefile = (f) => {
    setFile(URL.createObjectURL(f));
    setFiles(f);
}
    
  return (
    <div>
        <ColorNav/>
            <Wrapper>
                <Div className='card'>
                   <Title>Creat New Order</Title>
                    <div className='row m-3'>
                       <div className='col-md-6 form-group'>
                       <Lable>Name</Lable>
                       <Input className='form-control' value={username.name}></Input>
                       </div>
                       <div className='col-md-6'>
                       <Lable>Phone</Lable>
                       <Input className='form-control' value={username.phone}></Input>
                       </div>
                    </div>
                    <div className='row m-3'>
                       <div className='col-md-6 form-group'>
                       <Lable>Address</Lable>
                       <Input className='form-control' value={username.address}></Input>
                       </div>
                       <div className='col-md-6'>
                       <Lable>Order Date</Lable>
                       <Input className='form-control' value={date}/>
                       </div>
                    </div> 
                    <div className='row m-3'>
                       <div className='col-md-6 form-group'>
                       <Lable>Payment Type</Lable>
                       <Select1 className='form-control' value={paymenttype} onChange={onPaymentType}>
                       <Option>Select Payment Type</Option>
                        <Option value='1'>Prepaid Partial</Option>
                        <Option value='2'>Prepaid Full</Option>
                       </Select1>
                       </div>
                       <div className='col-md-6'>
                       <Lable>Payment Channel</Lable>
                       <Select1 className='form-control' value={paymentchannel} onChange={onPaymentChannelChanged}>
                       <Option>Select Payment Channel</Option>
                        <Option value='1'>Mobile Banking</Option>
                        <Option value='2'>Internet Banking</Option>
                       </Select1>
                       </div>
                    </div> 

                    {
              paymentchannel == '1' ?
                <div>
                <div className='row m-3'>
              <div className='offset-4 col-md-2 form-group'>
              <Input  type="radio" name="userdata" onChange={bankInfo}></Input>
              <Lable className='offset-1' >Bank Info</Lable>
              </div>
              <div className='col-md-6'>
              <Input  type="radio" name="userdata"  onChange={paidInfo}></Input>
              <Lable className='offset-1'>Paid Info</Lable>
              </div>
           </div>
                </div>
                : ''
            }
                    
                {
                    design_id == 1 ? <MainText>
                    <Left> <Text1>Familyarrow Brand</Text1></Left>
                    <Right> <Text1>Price Range : 22000 - 25500</Text1></Right>
                </MainText>  :  design_id == 2 ? <MainText>
                    <Left> <Text1>Branded Brand</Text1></Left>
                    <Right> <Text1>Price Range : 30000 - 65000</Text1></Right>
                </MainText> : <MainText>
                    <Left> <Text1>Eco Family Brand</Text1></Left>
                    <Right> <Text1>Price Range : 18000 - 20000</Text1></Right>
                </MainText>
                }
               
                    <Text>Choose Items that you want!<input type='hidden' id={'eid'} /></Text>
                    <Text><Input  type="checkbox" name="userdata" style={{marginRight:'10px'}} onClick={()=>setCheck(!check)}></Input>Others</Text>
                
                {
                    check ? 
                    <>
                     <table className="table mt-4">
                    <thead>
                        <tr className='text-center'>
                        <th scope="col">Item</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="addrow">
              
                <tr className='text-center' id="defaultrow">
                 <td>
                    <Input type='file' id={"file"} onChange={(e)=>changefile(e.target.files[0])}></Input>
                 </td>
                 <td>
                   <Input type='text' id={"description"} onChange={(e)=>setDescription(e.target.value)}></Input>
                 </td>
                 <td><Qty  id={"qty1"} placeholder="0"/></td>
                 <td><Qty  id={"price1"} placeholder="0"/></td>
                 <td><Delete onClick={attach}>Add</Delete></td>
                 <td></td>
                 </tr>
                 
                                 
                    </tbody>
                    </table>
                     <Text>Your Preorder Items</Text>
                <div className='mt-4 mb-5' id="preorders">
                    <div className='row mt-2 text-center'>
                        <div className='col-md-3'>
                            <span>Item</span>
                        </div>
                        <div className='col-md-2'>
                            <span>Quantity</span>
                        </div>
                        <div className='col-md-2'>
                            <span>Price</span>
                        </div>
                        <div className='col-md-2'>
                            <span>Total</span>
                        </div>
                        <div className='col-md-3'>
                            <span>Action</span>
                        </div>
                    </div>
                    {preattach.map((t)=>(
                        <div className='row mt-2 text-center'>
                        <div className='col-md-3'>
                        <img src={t.file} width="140px" height='auto'/>
                        </div>
                        <div className='col-md-2 mt-5'>
                            <span>{t.testqty}</span>
                        </div>
                        <div className='col-md-2 mt-5'>
                            <span>{t.testprice}</span>
                        </div>
                        <div className='col-md-2 mt-5'>
                            <span>{t.testqty * t.testprice}</span>
                        </div>
                        <div className='col-md-3 mt-5'>
                            <span><Cancel onClick={() => removeattach(t.orderid)}>Cancel</Cancel></span>&nbsp;&nbsp;
                            <span><Edit onClick={() => editattach(t.orderid)}>Edit</Edit></span>
                        </div>
                    </div>
                    ))}
                </div>
                <Save onClick={()=>savepreorder(2)}>Make Order</Save>
            
                </>
                    : 
                    <>
                    <table className="table mt-4">
                    <thead>
                        <tr className='text-center'>
                        <th scope="col">Item Name</th>
                        <th scope="col">Specification</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="addrow">
     
                <tr className='text-center' id="defaultrow">
                 <td>
                    <span id='item_name'></span>&nbsp;<span id="gen_name"></span>&nbsp;<span id="fab_name"></span>
                    &nbsp;<span id="col_name"></span>&nbsp;<span id="siz_name"></span>
                 </td>
                 <td>
                 <Lable className='px-2'>Design</Lable>
                    <Select id={'type'}> 
                     </Select>&nbsp;&nbsp;&nbsp;
                     <Btn onClick={addit}><Add/></Btn><br></br><br></br>

                    <Input  type="radio" name="genderdata" id='r1' onClick={()=>choosegen(1)}></Input>
                    <Lable className='px-2'>Male</Lable>
                    <Input  type="radio" name="genderdata" id='r2' onClick={()=>choosegen(2)}></Input>
                    <Lable className='px-2'>Female</Lable>
                    <Input  type="radio" name="genderdata" id='r3' onClick={()=>choosegen(3)}></Input>
                    <Lable className='px-2'>Unisex</Lable><br></br><br></br>
                

                    <Lable className='px-2'>Fabric</Lable>
                    <Select id={'types'}> 
                     </Select>&nbsp;&nbsp;&nbsp;
                     <Btn onClick={additem}><Add/></Btn><br></br><br></br>
                     <Lable className='px-2' style={{marginLeft:'55px'}}>Color</Lable>
                    <Select id={'types1'}> 
                     </Select>&nbsp;&nbsp;&nbsp;
                     <Btn onClick={additem1}><Add/></Btn>
                     <Check onClick={cheColor} style={{ display: 'inline-block' }}>Check</Check><br></br><br></br>
                     <Lable className='px-2'>Size</Lable>
                    <Select id={'types2'}> 
                     </Select>&nbsp;&nbsp;&nbsp;
                     <Btn onClick={additem2}><Add/></Btn><br></br><br></br>
                 </td>
                 <td><Qty  id={"qty"} placeholder="0" onKeyUp={changeprice} /></td>
                 <td><Qty  id={"price"} placeholder="0"/></td>
                 <td><Delete onClick={qtychange}>Add</Delete></td>
                 <td></td>
                 </tr>
                     
                                 
                    </tbody>
                    </table>
                  
               
                    <Text>Your Preorder Items</Text>
                <div className='mt-4 mb-5' id="preorders">
                    <div className='row mt-2 text-center'>
                        <div className='col-md-3'>
                            <span>Item Name</span>
                        </div>
                        <div className='col-md-2'>
                            <span>Quantity</span>
                        </div>
                        <div className='col-md-2'>
                            <span>Price</span>
                        </div>
                        <div className='col-md-2'>
                            <span>Total</span>
                        </div>
                        <div className='col-md-3'>
                            <span>Action</span>
                        </div>
                    </div>
                    {pre.map((p)=>(
                        <div className='row mt-2 text-center'>
                        <div className='col-md-3'>
                            <span>{p.testname}</span>
                        </div>
                        <div className='col-md-2'>
                            <span>{p.testqty}</span>
                        </div>
                        <div className='col-md-2'>
                            <span>{p.testprice}</span>
                        </div>
                        <div className='col-md-2'>
                            <span>{p.testqty * p.testprice}</span>
                        </div>
                        <div className='col-md-3'>
                            <span><Cancel onClick={() => remove(p.orderid)}>Cancel</Cancel></span>&nbsp;&nbsp;
                            <span><Edit onClick={() => edit(p.orderid)}>Edit</Edit></span>
                        </div>
                    </div>
                    ))}
                </div>
                <Save onClick={()=>savepreorder(1)}>Make Order</Save>
                </>
                }
            
                </Div>
            </Wrapper>
        <Footer/>
        <BankInfoDialog open={showBankInfo} close={() => setshowBankInfo(false)} />
        <PaidInfoDialog open={showPaidInfo} close={() => setshowPaidInfo(false)} />
        <CheckColor name={colourname} open={checkColor} close={() => setCheckColor(false)}/>
    </div>
    
  )
}

export default Order

