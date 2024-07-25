import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Address from './Pages/Address/Address'
import Property from './Pages/Property/Property'
import Quantity from './Pages/Quantity/Quantity'
import Selection from './Pages/Selection/Selection'
import Thankyou from './Pages/Thankyou/Thankyou'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/address' element={<Address />} />
        <Route path='/property' element={<Property />} />
        <Route path='/quantity' element={<Quantity />} />
        <Route path='/camera' element={<Selection />} />
        <Route path='/thankyou' element={<Thankyou />} />
      </Routes>
    </>
  )
}

export default App
