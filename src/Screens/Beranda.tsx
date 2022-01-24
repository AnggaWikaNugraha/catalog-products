import React, { useCallback, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import AppCard from '../Components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { actProducts, actSetPageSize } from '../redux/action/products';
import AppCarousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import Loading from './loading'

export default function Beranda() {

  const dispatch = useDispatch();
  const stateProducts = useSelector((state: any) => state.stateProducts)
  const stateLoading = useSelector((state: any) => state.loading)

  useEffect(() => {
    dispatch(actProducts())
  }, [stateProducts.sizePage])

  // how to invinite scrool
  const observer = useRef<any>();
  const lastBookElementRef = useCallback(node => {
    if (observer.current) {
      observer.current.disconnect()
    }
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log('tes')
        dispatch(actSetPageSize())
      }
    })
    if (node) observer.current.observe(node)

  }, [])


  return (
    <>
      <AppCarousel />
      <Box sx={{ height: '64vh', overflow: 'auto', marginTop: '20px' }}>
        <Container maxWidth='xl' sx={{ marginBottom: '20px' }}>
          <Grid container spacing={2}>
           
            {stateProducts.data?.map((res: any, id: number) => {
              if (stateProducts.data.length === id + 1) {
                return (
                  <Grid ref={lastBookElementRef} key={id} item xs={6} md={4} lg={3}>
                    <AppCard res={res} />
                  </Grid>
                )
              } else {
                return (
                  <Grid key={id} item xs={6} md={4} lg={3}>
                    <AppCard res={res} />
                  </Grid>
                )
              }
            })}
          </Grid>
        </Container>
        <Footer />
      </Box>
    </>
  );
};
