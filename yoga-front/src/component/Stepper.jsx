
import "./stepper.css";
import { TiTick } from "react-icons/ti";
const Stepper = ({steps,currentStep,complete}) => {

    // //const steps = ["Enrollment", "Payment"]
    // const [currentStep, setCurrentStep] = useState(1)
    // const [complete, setComplete] = useState(false);

  return (
    <div className='flex justify-center'>
          {steps?.map((step, index) => (
              <div key={index} className={`step-item ${currentStep===index+1 && "active"}  ${(index+1<currentStep||complete)}`}>
                  <div>{index + 1}</div>
                  <div className="step">
              {index < currentStep+1  ? <TiTick size={24} /> : index + 1}
            </div>
            <p className="text-gray-500">{step.level}</p>
          
              
          </div>
      ))}
    </div>
  )
}

export default Stepper
