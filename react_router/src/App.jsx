import React from 'react'
import NavBar from './components/NavBar'
import {Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import RouteLayout from './layout/RouteLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'
import JobsLayout from './layout/JobsLayout'
import  Jobs, {JobsLoader } from './pages/Jobs'
import JobDetails, {JobDetailsLoader} from './components/JobDetails'
import Error from './components/Error'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RouteLayout />}>
        <Route index element={<Home />}/>
        <Route path='products' element={<Products />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<ContactLayout />}>
          <Route path='info' element={<ContactInfo />}/>
          <Route path='form' element={<ContactForm />}/>
        </Route>
        <Route path='jobs' element={<JobsLayout />} errorElement={<Error />}>
          <Route index element={<Jobs />} loader={JobsLoader} />
          <Route path=':id' element={<JobDetails/>} loader={JobDetailsLoader}/>
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Route>

    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App