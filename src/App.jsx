import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart, Header, Home } from "./components";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Toaster />
    </Router>
  );
}
