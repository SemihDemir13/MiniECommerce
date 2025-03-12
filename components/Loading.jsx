import React,{useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

 function Loading() {
    const {loading}=useSelector((store)=>store.product) //product slicenin içinden loading değerini çektik.beklemedeyken true olarak gelir
 

  return (
    <div>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
  //open={loading} → loading değeri true olduğunda, Backdrop bileşeni ekranda görünür.
//loading=false olduğunda, open={false} olur ve Backdrop kapanır.
}
export default Loading
