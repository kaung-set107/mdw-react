import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { resetProduct } from "../redux/cartRedux"
import BankInfoDialog from './BankInfoDialog'
import PaidInfoDialog from './PaidInfoDialog'



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
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Filter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`

const FilterTitle = styled.span`
    font-size: 15px;
    font-weight: 200;
    margin-bottom: 3px;
`
// hello world

const FilterSelect = styled.select`
    
    padding: 5px;
`

const FilterOption = styled.option``

export default function CheckoutDialog(props) {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [township, setTownship] = useState('');
  const [charges, setCharges] = useState('');
  const [paymenttype, setPaymentType] = useState('');
  const [paymentchannel, setPaymentChannel] = useState('');
  const [remark, setRemark] = useState('');
  const navigate = useNavigate();

  const [townships, setTownships] = useState([]);
  const url= useSelector(state => state.user.url);

  useEffect(() => {
    const getTownships = async () => {
      try {

        const res = await axios.get(url+"/api/township", {
          headers: {
            'Access-Control-Allow-Origin': '*',
          }
        });

        console.log(res.data);
        setTownships(res.data);

      } catch (err) { }
    };
    getTownships();
  }, []);


  const username = useSelector(state => state.user);
  // console.log(username.name);

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  // console.log(cart);

  console.log(name, phone, address, township, charges);

  const onTownshipChanged = (e) => {
    setTownship(e.target.value);
    const res = axios.get(url+'/api/township_charges/' + e.target.value).then(function (response) {
      console.log(response.data);
      setCharges(response.data.charges);
    }).catch(function (error) {
      alert('fail charges');
    })
  };
  const onChargesChanged = (e) => setCharges(e.target.value);
  const onPaymentTypeChanged = (e) => setPaymentType(e.target.value);
  const onPaymentChannelChanged = (e) => setPaymentChannel(e.target.value);
  const onRemarkChanged = (e) => setRemark(e.target.value);
  const orderSave = () => {
    // alert(paymentchannel);
    const res = axios.post(url+'/api/ecommerce_order_store', {
      id: username.id,
      name: username.name,
      phone: username.phone,
      address: username.address,
      township: township,
      charges: charges,
      paymenttype: paymenttype,
      paymentchannel: paymentchannel,
      remark: remark,
      products: cart.products,
      quantity: cart.quantity,
      amount: cart.total,
    }).then(function (response) {
      // alert('success store');
      document.getElementById('checkout').style.visibility = "hidden";
      dispatch(resetProduct());
      navigate('/order_list');
    }).catch(function (error) {
      alert('fail store');
    })

  }

  const [showBankInfo, setshowBankInfo] = useState(false);
  const [showPaidInfo, setshowPaidInfo] = useState(false);

  const bankInfo = () => {
    setshowBankInfo(true);
  }

  const paidInfo = () => {
    setshowPaidInfo(true);
  }

  return (
    <div>

      <Dialog open={props.open} onClose={props.close} id="checkout">
        <DialogTitle><b>Delivery and Payment Information</b></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter information to check out!
          </DialogContentText>
          <Form>
            <Input type="text" id="name" name="name" placeholder="name" value={username.name} />
            <Input type="text" id="phone" name="phone" placeholder="phone" value={username.phone} />
            <Input type="text" id="address" name="address" placeholder="address" value={username.address} />
            {/* <Input type="text" id="township" name="township" placeholder="township" value={township} onChange={onTownshipChanged}/>    */}
            <Filter>
              <FilterTitle>Townships</FilterTitle>
              <FilterSelect onChange={onTownshipChanged}>
                <FilterOption>Select Township</FilterOption>
                {townships.map(township => (
                  <FilterOption value={township.id} key={township.id}>{township.township}</FilterOption>
                ))}
              </FilterSelect>
            </Filter>
            <Input type="text" id="charges" name="charges" placeholder="charges" value={charges} onChange={onChargesChanged} />
            <Filter>
              <FilterTitle>Payment Type</FilterTitle>
              <FilterSelect value={paymenttype} onChange={onPaymentTypeChanged}>
                <FilterOption>Select Payment Type</FilterOption>
                {/* <FilterOption value='1'>Prepaid Partial</FilterOption> */}
                <FilterOption value='2'>Prepaid Full</FilterOption>
              </FilterSelect>
            </Filter>
            <Filter>
              <FilterTitle>Payment Channel</FilterTitle>
              <FilterSelect value={paymentchannel} onChange={onPaymentChannelChanged}>
                <FilterOption>Select Payment Channel</FilterOption>
                <FilterOption value='1'>Mobile Banking</FilterOption>
                <FilterOption value='2'>Internet Banking</FilterOption>
              </FilterSelect>
            </Filter>

            {
              paymentchannel == '1' ?
                <div>
                  <div>
                    <label>Bank Info</label>
                    <Input type="radio" name="userdata" onChange={bankInfo} />
                  </div>
                  <div>
                    <label>Paid Info</label>&nbsp;
                    <Input type="radio" name="userdata" onChange={paidInfo} />
                  </div>
                </div>
                : ''
            }

            <Input type="text" id="remark" name="remark" placeholder="remark" onChange={onRemarkChanged} />
          </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancel</Button>
          <Button onClick={orderSave}>Save</Button>
        </DialogActions>
      </Dialog>
      <BankInfoDialog open={showBankInfo} close={() => setshowBankInfo(false)} />
      <PaidInfoDialog open={showPaidInfo} close={() => setshowPaidInfo(false)} />
    </div>
  );
}
// phyo
//maymyat