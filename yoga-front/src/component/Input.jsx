import { Field, ErrorMessage } from "formik"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputText = ({ name, type, label }) => {
    return (
        <div className="w-[400px]">
            <div className="relative w-full min-w-[400px] h-10">
                <Field
                    name={name}
                    type={type}

                    className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                    placeholder=" " />
                <label
                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">{label}
                </label>
            </div>
             <ErrorMessage name={name} className="w-full  text-red-500 text-[12px]" component="span" />
        </div>
    )
}

const SelectItem = ({type,name,label,item}) => {
    return (
        <div className="w-[400px] flex gap-3 flex-col">
            <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label}
            </label>
            <Field
            as={type}
            name={name}
            className="flex h-10 w-full  rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option  value="" disabled>
              {label}
            </option>
            {item.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
            </Field>
             <ErrorMessage name={name} className="w-full  text-red-500 text-[12px]" component="span" />
        </div>
    )
}

const SelectDate = ({label,onChange,startDate,name}) => {
    return (
        <div className="w-[400px] flex flex-col">
            <label>{label}</label>
            <DatePicker
                className="w-full  border-gray-200 border-[2px] rounded focus:border-gray-500"
      showIcon
      placeholderText={label}
                selected={startDate}
      onChange={onChange}
            />
             <ErrorMessage name={name} className="w-full  text-red-500 text-[12px]" component="span" />
        </div>
    )
}


const Input = ({ type ,label,name,item,onChange,value}) => {


    if (type === "text" || type ==='number'||type==="email") {
        return (<InputText
            name={name}
            type={type}
            label={label}
            
        
        />)
    }

    if (type === "select") {
        return (
            <SelectItem type={type } name={name} label={label} item={item} />
        )
    }

    if (type === "date") {
        return (
            <SelectDate  type={ type} name={name} label={label} onChange={onChange} startDate={value} />
        )
    }

}

export default Input
