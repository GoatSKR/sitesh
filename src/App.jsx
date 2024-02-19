
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <Routes>
      <Route exact path="/*" element={<Home />} />
      <Route exact path="/contact" element={<ContactUs />} />
    </Routes>
  )
}

export default App
