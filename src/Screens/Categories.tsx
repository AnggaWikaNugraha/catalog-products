import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actCategories } from '../redux/action/category';
import { styled } from '@mui/material/styles';

export default function Categories() {

  const dispatch = useDispatch();
  const stateCategories = useSelector((state: any) => state.stateCategories)
  const [isNumber, setIsNumber] = useState(0)
  // console.log(isNumber)

  useEffect(() => {
    dispatch(actCategories())
  }, [])

  const handleCLick = (id: number) => {
    setIsNumber(id)
  }

  return (
    <Box sx={{ height: '89vh', overflow: 'auto', marginTop: '20px' }}>
      <Container maxWidth='xl' sx={{ marginBottom: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={3} md={2} lg={2}>
            {
              stateCategories.data?.map((res: any, index: number) => {
                return (
                  <Categori
                    isactive={isNumber === index ? 'true' : ''}
                    onClick={() => handleCLick(index)}>
                    {res.name}
                  </Categori>
                )
              })
            }
          </Grid>
          <Grid item xs={8} md={4} lg={3}>
            {
              stateCategories?.data[isNumber]?.children_data?.map((res: any, index: number) => {
                return (
                  <CategoriChild>
                  {res.name}
                </CategoriChild>
                )
              })
            }
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

type INavbar = {
  isactive?: string
}

const Categori = styled('div') <INavbar>`
  height : 50px;
  width: 100%;
  border: 1px solid #000;
  padding: 3px;
  border-radius : 5px;
  display: flex;
  justify-content : center;
  align-items : center;
  margin-bottom : 20px;
  fontSize : 12px;
  background-color : ${props => props.isactive === 'true' ? '#ebeb' : '#fff'};
`

const CategoriChild = styled('div') <INavbar>`
  height : 30px;
  width: 100%;
  border: 1px solid #000;
  padding: 3px;
  border-radius : 5px;
  display: flex;
  justify-content : center;
  align-items : center;
  margin-bottom : 10px;
  fontSize : 12px;
  background-color : #bbb;
`