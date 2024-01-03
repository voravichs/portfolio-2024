import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import {Home} from './pages'

function App() {

  return (
    <>
      <div className="overflow-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
