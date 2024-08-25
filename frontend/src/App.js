import './static//App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/Auth';
import NavCustomerBar from './components/NavCustomer';
import NavAdminBar from './components/NavAdmin';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';
import AdminLogin from './pages/adminLogin';
import AdminBusiness from './pages/adminBusiness';
import AdminProducts from './pages/adminProducts';
import AdminSales from './pages/adminSales';



function App() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')
  const { user } = useAuth();

  return (
    <div>
      {isAdmin ? (user ? <NavAdminBar /> : null) : <NavCustomerBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/business" element={<ProtectedRoute><AdminBusiness /></ProtectedRoute>} />
        <Route path="/admin/sales" element={<ProtectedRoute><AdminProducts /></ProtectedRoute>} />
        <Route path="/admin/products" element={<ProtectedRoute><AdminSales /></ProtectedRoute>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  );
}
