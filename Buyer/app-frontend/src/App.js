import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import  PaymentPage from "./components/PaymentPage"
import ProductPage from "./components/ProductPage"
import MainPage from "./components/MainPage"
import FeedbackForm from './components/FeedbackForm';
import SuccessPage from "./components/SuccessPage";
import FailurePage from "./components/FailurePage";
function App() {
  return(
    <div className="App">
    <Routes>
      <Route path="/payment"  element={<PaymentPage/>} />
      <Route path="/"  element={<ProductPage/>} />
      <Route path="/main"  element={<MainPage/>} />
      <Route path="/feedback"  element={<FeedbackForm/>} />
      <Route path="/success"  element={<SuccessPage/>} />
      <Route path="/failure"  element={<FailurePage/>} />
    </Routes>
    </div>
  )
}

export default App;