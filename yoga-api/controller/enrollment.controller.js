const Enrollment = require("../model/enroll.model")
const Payment = require("../model/payment.model")
const { EMAIL_REGEX } = require("../utils/regex")
const bcrypt=require("bcryptjs")

const enrollUser = async (req, res) => {
    
    try {
      const { accountHolderName,accountNumber,address,age,batch,cardType,cardValidDate,cvvNumber,email,enrollmentDate,name} = req.body
    
    console.log(name, age, batch, email, accountNumber, accountHolderName, cvvNumber, cardType, cardValidDate,enrollmentDate)
      
        const existingEnrollment = await Enrollment.findOne({ where: { email } })
        
        // Validate email format
   
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
      }
    

    // Validate age range
    if (age <= 18 || age >= 65) {
      return res.status(400).json({ error: "Age must be between 18 and 65." });
    }
 
         if (accountNumber.length !== 16) {
      return res.status(400).json({ error: "Account number must be 16 digits." });
    }
 
        if (cvvNumber.length !== 3) {
      return res.status(400).json({ error: "CVV must be 3 digits." });
    }

         
    // Validate batch value
    const validBatches = ['6-7AM', '7-8AM', '8-9AM', '5-6PM'];
    if (!validBatches.includes(batch)) {
      return res.status(400).json({ error: "Invalid batch value." });
      }
      
      const validCardType = ["CREDIT", "DEBIT"]
      
      if (!validCardType.includes(cardType)) {
        return res.status(400).json({ error: "Invalid card type." });
      }


        if (existingEnrollment) {
            const enrollmentDate = existingEnrollment.enrollmentDate
            const oneMonth = new Date()
            oneMonth.setMonth(oneMonth.getMonth() - 1);

            if (enrollmentDate >= oneMonth) {
                return res.status(400).json({error:"User is already registered within the last one month "})
            }
        }
        
        const enrollment = await Enrollment.create({ name, age, email, address, batch:batch.toString(),enrollmentDate })
         console.log("hello7",enrollment)
        const hashedCvv = await bcrypt.hash(cvvNumber,10)
        await Payment.create({ amount: 500,  accountNumber, accountHolderName, cvvNumber:hashedCvv, cardType:cardType.toString(), cardValidDate, enrollmentId: enrollment.enrollmentId });
        
       return res.status(201).json({message:"User Enrolled and Payment is Succesfully Done"})

    } catch (error) {
      console.log("error", error)
        return res.status(500).json({message:error})
    }
}


module.exports={enrollUser}