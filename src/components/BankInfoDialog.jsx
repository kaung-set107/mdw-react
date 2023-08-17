import { useState, useEffect } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import kbzbank from '../files/kbzbank.png'
import aya from '../files/aya.jpg'
import cbpay from '../files/cbpay.jpg'
import kbzpay from '../files/kbzpay.png'
import wave from '../files/wave.png'
import waveqr from '../files/waveqr.jpg'
import kbzpayqr from '../files/kbzpayqr.jpg'
import cbpayqr from '../files/cbpayqr.jpg'

const Bank = styled.div`
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: space-between;
  flex-direction: row;
`
const BankLogo = styled.div`
  width: 20%;
  cursor: pointer;
  padding: 25px;
`
const Logo = styled.img`
  width: 100%;
`
const Imp = styled.span`
  font-weight: bold;
  color: #111111;
`
const QRBox = styled.div`
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: center;
`
const QR = styled.img`
  width: 50%;
`

export default function BankInfoDialog(props) {

  const [KBZBank, isKBZBank] = useState(false);
  const [AYABank, isAYABank] = useState(false);
  const [CBPay, isCBPay] = useState(false);
  const [KBZPay, isKBZPay] = useState(false);
  const [Wave, isWave] = useState(false);

  const setKBZBank = () => {
    isAYABank(false);
    isKBZPay(false);
    isCBPay(false);
    isWave(false);
    isKBZBank(true);
  }
  const setAYABank = () => {
    isKBZBank(false);
    isKBZPay(false);
    isCBPay(false);
    isWave(false);
    isAYABank(true);
  }
  const setKBZPay = () => {
    isKBZBank(false);
    isAYABank(false);
    isCBPay(false);
    isWave(false);
    isKBZPay(true);
  }
  const setCBPay = () => {
    isKBZBank(false);
    isAYABank(false);
    isKBZPay(false);
    isWave(false);
    isCBPay(true);
  }
  const setWave = () => {
    isKBZBank(false);
    isAYABank(false);
    isKBZPay(false);
    isCBPay(false);
    isWave(true)
  }

  return (
    <div>

      <Dialog open={props.open} onClose={props.close}>
        <DialogTitle><b>User Bank Information</b></DialogTitle>
        <DialogContent>
          <DialogContentText><b>Choose One of the Methods</b></DialogContentText>

          <Bank>
            <BankLogo onClick={setKBZBank}><Logo src={kbzbank}/></BankLogo>
            <BankLogo onClick={setAYABank}><Logo src={aya}/></BankLogo>
            <BankLogo onClick={setCBPay}><Logo src={cbpay}/></BankLogo>
            <BankLogo onClick={setKBZPay}><Logo src={kbzpay}/></BankLogo>
            <BankLogo onClick={setWave}><Logo src={wave}/></BankLogo>
          </Bank>
          <hr />

          {
            KBZBank ?
              <div style={{ paddingLeft: '20px' }}>
                <DialogContent>
                  <DialogContentText style={{ marginBottom: '5px' }}>KBZ Bank Account Number: <Imp>044 301 04400851101</Imp></DialogContentText>
                  <DialogContentText style={{ marginBottom: '5px' }}>Bank Account Name: <Imp>Ma Khin Thandar Ko</Imp></DialogContentText>
                  <DialogContentText style={{ marginBottom: '5px' }}>Owner: <Imp>Ma Khin Thandar Ko</Imp></DialogContentText>
                </DialogContent>
              </div>
              : ''
          }
          {
            AYABank ?
              <div style={{ paddingLeft: '20px' }}>
                <DialogContent>
                  <DialogContentText style={{ marginBottom: '5px' }}>AYA Bank Account Number - <Imp>20009186451</Imp></DialogContentText>
                  <DialogContentText style={{ marginBottom: '5px' }}>Bank Account Name - <Imp>Ma Khin Thandar Ko</Imp></DialogContentText>
                  <DialogContentText style={{ marginBottom: '5px' }}>Owner - <Imp>Ma Khin Thandar Ko</Imp></DialogContentText>
                </DialogContent>
              </div>
              : ''
          }
          {
            KBZPay ?
              <div style={{ paddingLeft: '20px' }}>
                <DialogContent>
                  <DialogContentText style={{ marginBottom: '5px' }}>KBZ Pay Account Number - <Imp>09 255 775 402</Imp></DialogContentText>
                  <DialogContentText style={{ marginBottom: '5px' }}>Bank Account Name - <Imp>Ma Khin Thandar Ko</Imp></DialogContentText>
                  <DialogContentText style={{ marginBottom: '5px' }}>Owner - <Imp>Ma Khin Thandar Ko</Imp></DialogContentText>
                  <QRBox>
                    <QR src={kbzpayqr} />
                  </QRBox>
                </DialogContent>
              </div>
              : ''
          }
          {
            CBPay ?
              <div style={{ paddingLeft: '20px' }}>
                <DialogContent>
                  <DialogContentText style={{ marginBottom: '5px' }}>CB Pay Account Number - <Imp>3571 0830 0142 0024</Imp></DialogContentText>
                  <DialogContentText style={{ marginBottom: '5px' }}>Bank Account Name - <Imp>Ma Khin Thandar Ko</Imp></DialogContentText>
                  <DialogContentText style={{ marginBottom: '5px' }}>Owner - <Imp>Ma Khin Thandar Ko</Imp></DialogContentText>
                  <QRBox>
                    <QR src={cbpayqr} />
                  </QRBox>
                </DialogContent>
              </div>
              : ''
          }
          {
            Wave ?
              <div style={{ paddingLeft: '20px' }}>
                <DialogContent>
                  <DialogContentText style={{ marginBottom: '5px' }}>Wave Money Account Number - <Imp>09 255 775 402</Imp></DialogContentText>
                  <DialogContentText style={{ marginBottom: '5px' }}>Bank Account Name - <Imp>Ma Khin Thandar Ko</Imp></DialogContentText>
                  <DialogContentText style={{ marginBottom: '5px' }}>Owner - <Imp>Ma Khin Thandar Ko</Imp></DialogContentText>
                  <QRBox>
                    <QR src={waveqr} />
                  </QRBox>
                </DialogContent>
              </div>
              : ''
          }
          
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// phyo
//maymyat