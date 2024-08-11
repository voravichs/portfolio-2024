import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import {Home, About, Works, Contact} from './pages'

function App() {

  return (
    <>
      <div className="overflow-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
