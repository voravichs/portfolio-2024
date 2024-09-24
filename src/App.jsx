import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";



function App() {
  return (
    <>
      <div className="overflow-hidden">
        <BrowserRouter>
          <AnimatedRoutes/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
