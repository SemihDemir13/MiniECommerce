import { useState } from 'react'

import './App.css'
import PageContainer from '../container/PageContainer'
import Header from '../components/Header'
import Loading from '../components/Loading'
import { store } from '../redux/store'
import ProductList from '../components/ProductList'
import RouterConfig from '../config/RouterConfig'
import { useSelector } from 'react-redux'
import Drawer from '@mui/material/Drawer';
import { ToastContainer } from "react-toastify";



function App() {
  const {products}=useSelector((store)=>store.basket);
  const [openDrawer, setOpenDrawer] = useState(false);  // Başlangıçta kapalı

  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  return (
    <div>
      
      <PageContainer>
  <ToastContainer position="top-right" autoClose={3000} />
  <Header />
  <RouterConfig />
  <Loading />
  <Drawer anchor="right" open={openDrawer} onClose={() => toggleDrawer(false)}>
    <div>semih</div>
  </Drawer>
</PageContainer>
    
      
    </div>
   
  )
}

export default App
