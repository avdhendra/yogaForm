import { Formik, Form } from "formik"
import * as yup from "yup"
import Input from "../../component/Input";
import { batch } from "../../constant/constant";

import { useRef, useState } from "react";


const Enrollment = ({ next }) => {
    const formikRef = useRef();
    const [isFilled, setIsFilled] = useState(false);

    console.log("filled", isFilled);

    const initialValues = {
        name: "",
        age: "",
        email: "",
        address: "",
        batch: "",
        enrollmentDate: "",
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        age: yup
            .number()
            .required('Age is required')
            .min(18, 'Age must be at least 18 years old')
            .max(65, 'Age must be at most 65 years old'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        address: yup.string().required('Address is required'),
        batch: yup.string().required('Batch is required'),
        enrollmentDate: yup.date('Invalid date format')
            .required('Enrollment date is required'),
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
                <Form className="flex items-center flex-col gap-3 w-auto">
                    <Input type="text" name="name" label="Username" />
                    <Input type="text" name="age" label="Age" />
                    <Input type="email" name="email" label="Email" />
                     <Input type="text" name="address" label="Address" />
                    <Input type="select" name="batch" label="Select Batch" item={batch} />
                    <Input
                        type="date"
                        name="enrollmentDate"
                        label="Enrollment Date"
                        value={formikProps.values.enrollmentDate}
                        onChange={(date) =>
                            formikProps.setFieldValue("enrollmentDate", date)
                        }
                    />

                    <div className="w-full flex justify-center p-5">
                        <button
                            className="cursor-pointer w-full rounded-md p-2 bg-orange-400 disabled:bg-gray-300"
                            
                           
                            onClick={() => {
                                if (isFilled) {
                                    next(formikProps.values);
                                }
                            }}
                        >
                            Next
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Enrollment
