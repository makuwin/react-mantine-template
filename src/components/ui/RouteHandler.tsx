import { Routes, Route } from 'react-router-dom'
import Home from '../../pages'
import Inventory from '../../pages/inventory'

export default function RouteHandler() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
      </Routes>
    </>
  )
}
