import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import  PaymentPage from "./components/PaymentPage"
import ProductPage from "./components/ProductPage"
import MainPage from "./components/MainPage"
function App() {
  return(
    <div className="App">
    <Routes>
      <Route path="/payment"  element={<PaymentPage/>} />
      <Route path="/"  element={<ProductPage/>} />
      <Route path="/main"  element={<MainPage/>} />
    </Routes>
    </div>
  )
}

export default App;