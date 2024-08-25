import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/Auth'

const NavAdminBar = () => {
  const { logout } = useAuth()

  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/admin/business">Business Log</Link>
      <Link to="/admin/sales">Sales</Link>
      <Link to="/admin/products">Products</Link>
      <button onClick ={logout}>Logout</button>
    </nav>
  )
}

export default NavAdminBar