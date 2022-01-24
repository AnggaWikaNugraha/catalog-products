import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import App from '../App';
import Loading from '../Screens/loading'

export default function RenderApp() {
  const [isloading,setIsLoading] = useState(false)
  const stateLoading = useSelector((state: any) => state.loading)


  if (stateLoading.loading) {
    return (
      <Loading/>
    )
  }else{
    return (
      <App />
    )
  }
}
