import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import UserDashboard from './pages/dashboard/UserDashboard.jsx'
import CreateInvoice from './pages/invoices/CreateInvoice.jsx';
import ClientList from './pages/customer/ClientList.jsx';
import Templates from './pages/templates/Templates.jsx';
import History from './pages/history/History.jsx';
import Profile from './pages/profile/Profile.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import UserManagment from './pages/admin/UserManagment.jsx';
import AdminDashboard from './pages/dashboard/AdminDashboard.jsx';
import Setting from './pages/profile/Setting.jsx';
import Notification from './pages/profile/Notification.jsx';
import { errorToast, infoToast, successToast } from './utils/toast.js';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext.jsx';
import { QuotationProvider } from './context/QuotationContext.jsx';

const App = () => {
  const userRole = localStorage.getItem('role') // user || admin
  return (
    <>
      <AuthProvider>
        <QuotationProvider>

          <Toaster position="top-center" reverseOrder={false} />

          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/notification" element={<Notification />} />


              {
                userRole === 'user' &&
                (
                  <Route path="/dashboard/user" element={<UserDashboard role={userRole} />}>
                    <Route index element={<CreateInvoice />} />
                    <Route path='createinvoice' element={<CreateInvoice />} />
                    <Route path='clientlist' element={<ClientList />} />
                    <Route path='templates' element={<Templates />} />
                    <Route path='history' element={<History />} />
                  </Route>
                )
              };
              {
                userRole === 'admin' &&
                (
                  <Route path="/dashboard/admin" element={<AdminDashboard role={userRole} />}>
                    <Route index element={<Dashboard />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='createinvoice' element={<CreateInvoice />} />
                    <Route path='usermanagment' element={<UserManagment />} />
                    <Route path='templates' element={<Templates />} />
                    <Route path='history' element={<ClientList />} />
                  </Route>
                )
              }

            </Routes>
          </Router>
        </QuotationProvider>
      </AuthProvider>
    </>

  )
}

export default App