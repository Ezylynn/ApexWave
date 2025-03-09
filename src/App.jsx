import React from "react";
// import Router from './routes/Router'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import AuthProvider from "./Context/AuthProvider";
import RoomProvider from "./Context/RoomProvider";
function App() {
  return (
    <BrowserRouter>

      <AuthProvider>
        <RoomProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
          </Routes>
        </RoomProvider>
      </AuthProvider>

    </BrowserRouter>
  );
}

export default App;
