import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";



function App() {
  return (
    <>
      <div className="overflow-scroll">
        <BrowserRouter>
          <AnimatedRoutes/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
