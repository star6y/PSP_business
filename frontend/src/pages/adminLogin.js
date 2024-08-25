import React, { useState } from 'react'
import { useAuth } from '../context/Auth'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {login } = useAuth()
  const navigate  = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password }),
    })

    const data = await response.json();

    if (data.success) {
      login(username, password);
      navigate('/admin/business')
    } else {
      alert('Login failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input  type="text"     value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  )
}

export default AdminLogin