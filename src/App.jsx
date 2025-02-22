import React from 'react'
// import Router from './routes/Router'
import { BrowserRouter,  Routes, Route } from "react-router-dom";



import Home from "./pages/Home"
import Chat  from './pages/Chat'
import SignIn  from './pages/SignIn'
import SignUp  from './pages/SignUp'

function App() {
    return ( 


        

        <BrowserRouter>

            <Routes>
        <Route path="/" element={<Home/>}></Route>
       <Route path="/chat" element={<Chat/>}></Route>
       <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
            </Routes>
        </BrowserRouter>

          
           
     );
}

export default App;