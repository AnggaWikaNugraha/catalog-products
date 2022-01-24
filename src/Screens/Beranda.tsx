import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import AppCard from '../Components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { actProducts } from '../redux/action/products';
import AppCarousel from '../Components/Carousel';
import Footer from '../Components/Footer';

export default function Beranda() {

  const dispatch = useDispatch();
  const stateProducts = useSelector((state: any) => state.stateProducts)

  useEffect(() => {
    dispatch(actProducts())
  }, [])

  return (
    <>
      <AppCarousel />
        <Box sx={{ height: '64vh', overflow: 'auto', marginTop: '20px' }}>
          <Container maxWidth='xl' sx={{marginBottom : '20px'}}>
            <Grid container spacing={2}>
              {stateProducts.data?.map((res: any, id: number) => {
                return (
                  <Grid key={id} item xs={6} md={4} lg={3}>
                    <AppCard res={res} />
                  </Grid>
                )
              })}
            </Grid>
          </Container>
          <Footer />
        </Box>
    </>
  );
};
