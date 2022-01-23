import React from 'react';
import { styled } from '@mui/material/styles';
import BottomNavigationApp from '../Components/BottomNavigation';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return <WrapperApp>
    <Main>
      <Outlet/>
    </Main>
    <BottomNavigationApp></BottomNavigationApp>
  </WrapperApp>;
}

const WrapperApp = styled('div')({
  minHeight :'100vh',
  display: 'flex',
  flexDirection : 'column'
})

const Main = styled('div')({
  flex: '1',
  // backgroundColor : 'red',
  maxHeight : '100%',
  overflow: 'auto'
})
