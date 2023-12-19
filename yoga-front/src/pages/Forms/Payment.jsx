import { Formik, Form } from "formik"
import * as yup from "yup"
import Input from "../../component/Input";
import { type } from "../../constant/constant";

import { useRef, useState } from "react";

const Payment = ({ next, back }) => {
    const formikRef = useRef()
    const [isFilled, setIsFilled] = useState(false)
    const initialValues = {
        accountHolderName: "",
        accountNumber: "",
        cvvNumber: "",
        cardType: "",
        cardValidDate: ""


    }
    const validationSchema = yup.object().shape({
        accountHolderName: yup.string().required('Account Holder Name is required'),
        accountNumber: yup.number()
            .typeError('Account Number must be a number')
            .positive('Account Number must be a positive number')
            .integer('Account Number must be an integer')
            .min(1000000000000000, 'Account Number must be 16 digits')
            .max(9999999999999999n, 'Account Number must be 16 digits')
            .required('Account Number is required'),
        cvvNumber: yup.number()
            .typeError('CVV Number must be a number')
            .positive('CVV Number must be a positive number')
            .integer('CVV Number must be an integer')
            .min(100, 'CVV Number must be 3 digits')
            .max(999, 'CVV Number must be 3 digits')
            .required('CVV Number is required'),
        cardType: yup.string()
            .required('Card Type is required')
            .oneOf(['CREDIT', 'DEBIT'], 'Card Type must be either "credit" or "debit"'),
        cardValidDate: yup.date('Invalid date format')
            .required('CardValid date is required'),
    });


    return (

        <Formik
            innerRef={formikRef}
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnMount={false}
            validate={(v) => setIsFilled(Object.values(v).some(Boolean))}
        >
            {(formikProps) => (

                <Form className="flex items-center  flex-col gap-3  w-auto">
                    <Input type="text" name="accountHolderName" label="Account Holder Name" />
                    <Input type="text" name="accountNumber" label="Acoount Number" />
                    <Input type="text" name="cvvNumber" label="CVV" />
                    <Input type="select" name="cardType" label="Card Type" item={type} />
                    <Input type="date" name="cardValidDate"
                        label="Card Valid Date"
                        value={formikProps.values.cardValidDate}
                        onChange={(date) => formikProps.setFieldValue("cardValidDate", date)}
                    />
                    <div className="flex w-[400px] justify-between">
                        <div>

                            <div className="w-full flex justify-center p-5">
                                <button className="cursor-pointer w-full rounded-md py-2 px-4 bg-gray-400" type="submit" onClick={back} >
                                    Back
                                </button>
                            </div>
                        </div>
                        <div>



                            <div className="w-full flex justify-center p-5">
                                <button className="cursor-pointer w-full rounded-md px-4 bg-orange-400 py-2 disabled:bg-gray-300" type="submit"  onClick={() => next(formikProps.values)} >
                                    Pay &#8377; 500
                                </button>
                            </div>
                        </div>
                    </div>



                </Form>
            )
            }

        </Formik>
    )
}

export default Payment
