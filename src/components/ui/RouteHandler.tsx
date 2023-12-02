import { Routes, Route } from 'react-router-dom'
import { Catalog, Home, Inventory, Invoice, POS } from '../../pages'
import { MainLayout } from '../../layouts/index'

const RouteHandler = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home/>}/>
          <Route path="/pos" element={<POS/>}/>
          <Route path="/inventory" element={<Inventory/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/invoice" element={<Invoice/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default RouteHandler