// import { useState } from "react";

// interface FormValues {
//     [key: string]: any
// }

// export const useForm = (callback, initialState = {})=>{
//     const [values, setValues] = useState(initialState);

//     const onChange = (event){
//         setValues({...values, [event.target.name]: event.target.value});
//         console.log(values);
        
//     };
//     const onSubmit = (event){
//         event.preventDefault();
//         callback();
//     }
//     return {
//         onChange,
//         onSubmit,
//         values
//         }
// }