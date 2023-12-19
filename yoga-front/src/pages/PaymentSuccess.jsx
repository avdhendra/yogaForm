
import  { useEffect } from 'react'
import { runFireworks } from '../utils/runfirework';
import namaste from "../assets/nameste.gif"
const PaymentSuccess = () => {
     useEffect(() => {
    
    runFireworks();
  }, []);
  return (
    <div className='w-[800px] flex rounded-lg  justify-center items-center bg-white'>
      <div className='text-center'>
<h1 className='text-2xl font-bold'>Thanks You For Enrollment in Yoga Classes</h1>
      </div>
      <div>
        <img src={namaste} />
      </div>
      
    </div>
  )
}

export default PaymentSuccess
