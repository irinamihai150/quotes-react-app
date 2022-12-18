import "./App.scss";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Card />
      <Footer />
      <>
        <Routes></Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
