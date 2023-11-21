import { Routes, Route } from 'react-router-dom'
import { Home, Inventory } from '../../pages'
import { MainLayout } from '../../layouts/index'

const RouteHandler = () => {
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

export default RouteHandler