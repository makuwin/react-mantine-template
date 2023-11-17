import { Routes, Route } from 'react-router-dom'
import Home from '../../pages'
import Inventory from '../../pages/inventory'
import MainLayout from '../../pages/MainLayout'

export default function RouteHandler() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home/>}/>
          <Route path="/inventory" element={<Inventory/>}/>
        </Route>
      </Routes>
    </>
  )
}
