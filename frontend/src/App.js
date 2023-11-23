import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen'
import AddStudentScreen from './screens/AddStudentScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element = {<HomeScreen />} />
      <Route path='/login' element = {<LoginScreen />} />
      <Route path='signup/' element = {<SignupScreen />} />
      <Route path='add-student/' element={<AddStudentScreen />} />
    </Route>
  )
)

function App() {
  return (
    <div >
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
