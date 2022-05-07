import React, { Component, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
   
// Containers 
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages 
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

function App() {

  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auth.token);


  console.log('admin', admin);

  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          {admin ?
            <Route path="*" name="Home" element={<DefaultLayout />} />
          :
            <>
              <Route exact path="/" name="Login Page" element={<Navigate to ='/login' />} />
              <Route exact path="/login" name="Login Page" element={<Login />} />
              <Route exact path="/register" name="Register Page" element={<Register />} />
            </>
          }
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
