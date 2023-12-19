
import { useRef, useState } from "react";
import yoga from "../assets/yoga.gif"
import Stepper from "../component/Stepper"
import Enrollment from "./Forms/Enrollment"
import Payment from "./Forms/Payment";
import {useNavigate} from "react-router-dom"
import api from "../utils/api";



const YogaForm = () => {
    const formsData = useRef(null)
    const navigate=useNavigate()
   
  const [currentStep, setCurrentStep] = useState(0);
    const [complete, setComplete] = useState(false);
    
    const handleSubmit = async (data) => {
        console.log("data", data)
        try {
            const response = await api.post("/yoga/enrollUser", data)
            navigate("/success")
            
        } catch (error) {
            console.log("error",error)
        }
        


}

    const handleNext = (data) => {
        console.log("hi")
     formsData.current = { ...formsData.current, ...data }

    if (currentStep < steps.length-1) {
      setCurrentStep(prev=>prev + 1)
    } else {
        setComplete(prev=>!prev)
      handleSubmit(formsData.current)
    }
    }
    
    const handlePrev = () => {
        if (currentStep > 0) {
             
             setCurrentStep(prev=>prev - 1)
             
    }
    }
    
     const steps = [
        {
            level: "Enrollment",
            component: <Enrollment next={handleNext } />
         },
         {
             level: "Payment",
             component: <Payment next={handleNext} back={handlePrev} />
         }];
    
  return (
    <div className="flex items-center justify-center">
          <div className="flex  rounded-[5px]">
              <div className="flex flex-col justify-center w-[500px]  gap-4 bg-white">
                  <div className="w-full">
                      <Stepper steps={steps} currentStep={currentStep} complete={complete}/>
                  </div>
                  <div >
                      
                {steps[currentStep].component}
                  </div>
                
              </div>
              <div className="w-[500px] h-auto">
                  
                  <img className="h-full" src={yoga} alt="loading..."/>
              </div>
      </div>
          
    </div>
  )
}

export default YogaForm
