import React from 'react';
import { styled } from '@mui/material/styles';

export default function Footer() {
  return <FooterWrap>
    <p style={{fontSize : '12px'}}>@AnggaWikaNugraha</p>
  </FooterWrap>;
}

const FooterWrap = styled('div')({
  width: '100%',
  backgroundColor : 'rgb(38, 83, 41)',
  color: 'white',
  display: 'flex',
  padding: '1px',
  flexDirection : 'column',
  alignItems : 'center'
})