import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageContainer from '../container/PageContainer'
import Header from '../components/Header'
import Loading from '../components/Loading'
import { store } from '../redux/store'
import ProductList from '../components/ProductList'
import RouterConfig from '../config/RouterConfig'

function App() {

  return (
    <div>
      
        <PageContainer>
           <Header/>
           <RouterConfig/>
           <Loading/>
        </PageContainer>
    
      
    </div>
   
  )
}

export default App
