import { useState } from "react";

// interface FormValues {
//     [key: string]: any
// }
// type Callback = {
//     callback(): string
// }
type EventCall = {
    preventDefault(): string
    target: {
        name: string
        value: string
    }
}

// interface CallbackType {
//     (data: string) : void
// }
export const useForm = (callback: any , initialState = {})=>{
    const [values, setValues] = useState(initialState);

    const onChange = (event: EventCall)=>{
        setValues({...values, [event.target.name]: event.target.value});
        console.log(values);
        
    };
    const onSubmit = (event: EventCall)=>{
        event.preventDefault();
        callback();
    }
    return {
        onChange,
        onSubmit,
        values
        }
}