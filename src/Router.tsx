import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Order } from './pages/Order'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmation" element={<Order />} />
      </Route>
    </Routes>
  )
}
