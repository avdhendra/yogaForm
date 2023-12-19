const Enrollment = require("../model/enroll.model")
const Payment = require("../model/payment.model")
const { EMAIL_REGEX } = require("../utils/regex")

const enrollUser = async (req, res) => {
    
    try {
      const { accountHolderName,accountNumber,address,age,batch,cardType,cardValidDate,cvvNumber,email,enrollmentDate,name} = req.body
    
    console.log(name, age, email, accountNumber, accountHolderName, cvvNumber, cardType, cardValidDate,enrollmentDate)
      console.log("hello")
        const existingEnrollment = await Enrollment.findOne({ where: { email } })
        
        // Validate email format
   
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
      }
      console.log("hello2")

    // Validate age range
    if (age <= 18 || age >= 65) {
      return res.status(400).json({ error: "Age must be between 18 and 65." });
    }
 console.log("hello3")
         if (accountNumber.length !== 16) {
      return res.status(400).json({ error: "Account number must be 16 digits." });
    }
 console.log("hello4")
        if (cvvNumber.length !== 3) {
      return res.status(400).json({ error: "CVV must be 3 digits." });
    }

         console.log("hello5")
    // Validate batch value
    const validBatches = ['6-7AM', '7-8AM', '8-9AM', '5-6PM'];
    if (!validBatches.includes(batch)) {
      return res.status(400).json({ error: "Invalid batch value." });
    }
 console.log("hello6")

        if (existingEnrollment) {
            const enrollmentDate = existingEnrollment.enrollmentDate
            const oneMonth = new Date()
            oneMonth.setMonth(oneMonth.getMonth() - 1);

            if (enrollmentDate >= oneMonth) {
                return res.status(400).json({error:"User is already registered within the last one month "})
            }
        }
        console.log("hello7")
        const enrollment = await Enrollment.create({ name, age, email, address, batch,enrollmentDate })
         console.log("hello7",enrollment)
        const hashedCvv = await bcrypt.hash(cvvNumber,10)
        await Payment.create({ amount: 500,  accountNumber, accountHolderName, hashedCvv, cardType, cardValidDate, EnrollmentId: enrollment.id });
         console.log("hello7")
       return res.status(201).json({message:"User Enrolled and Payment is Succesfully Done"})

    } catch (error) {
        
    }
}


module.exports={enrollUser}