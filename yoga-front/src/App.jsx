
import {Routes,Route} from "react-router-dom"
import Header from "./component/Header"
import YogaForm from "./pages/yogaForm"
import PaymentSuccess from "./pages/PaymentSuccess"
import NotFound from "./component/NotFound"
function App() {


  return (
    <div className="flex flex-col gap-5 bg-orange-300 min-h-screen">
      <div>

      <Header />
      </div>
      <div className="flex justify-center items-center">
      <Routes>
        
          <Route path="/" element={<YogaForm />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/*" element={<NotFound />} />
      </Routes>

      </div>
      
    </div>
  )
}

export default App
