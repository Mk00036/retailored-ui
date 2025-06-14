import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/Login/loginPage'
import DashBoard from '../pages/Dashboard/dashBoard'

const isAuthenticated = () => !!localStorage.getItem('token')

const PrivateRoute = ({ children }) =>
  isAuthenticated() ? children : <Navigate to="/" />

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <DashBoard />
        </PrivateRoute>
      }
    />
  </Routes>
)

export default AppRoutes
