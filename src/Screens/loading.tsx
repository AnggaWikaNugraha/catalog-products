import React from 'react';
import { styled } from '@mui/material/styles';

export default function loading() {
  return  <FooterWrap>
  <p style={{fontSize : '12px'}}>LOADING ....</p>
</FooterWrap>;
}

const FooterWrap = styled('div')({
  width: '100%',
  color: 'black',
  display: 'flex',
  padding: '1px',
  flexDirection : 'column',
  alignItems : 'center',
})