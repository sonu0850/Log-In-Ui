// // import { useForm } from "react-hook-form"

// // const ReactHookForm = () => {
// //   const {
// //     register,
// //     handleSubmit,
// //     watch,
// //     formState: { errors },
// //   } = useForm()

// //   const onSubmit = (data) => {
// //     console.log(data)
// // }

// // console.log('errors', errors)
// //   console.log(watch("example")) // watch input value by passing the name of it

// //   return (
// //     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
// //     <form onSubmit={handleSubmit(onSubmit)}>
// //       <p>{watch("example")}</p>
// //       {/* register your input into the hook by invoking the "register" function */}
// //       <input defaultValue="test" {...register("example")} />

// //       {/* include validation with required or other standard HTML validation rules */}
// //       <input {...register("exampleRequired", { required: true })} />
// //       {/* errors will return when field validation fails  */}
// //       {errors.exampleRequired && <span style={{color:'red'}}>This field is required</span>}

// //       <button type="submit">submit</button>
// //     </form>
// //   )
// // }

// // export default ReactHookForm;

// import React, { useEffect, useState } from "react";
// import { useForm, Controller, useFieldArray } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema1 = yup.object().shape({
//  // firstName: yup.string().required("First Name is required"),
//  test: yup.array().of(
//   yup.object().shape({
//     firstName: yup.string().required("first Name is required"),
//     lastName: yup.string().required("Last Name is required"),
//     phone: yup.string().optional('phone is required')
//   })
//  )
// });

// const schema2 = yup.object().shape({
//   lastName: yup.string().required("Last Name is required"),
//   lastName: yup.string().required("Last Name is required"),
// });
// const schema3 = yup.object().shape({
//   email: yup.string().email("Invalid email").required("Email is required"),
// });
// const defaultValue = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   test: [{ firstName: "", lastName: "", phone:"" }]
// };
// const FormComponent = () => {
//   const [step, setStep] = useState(1);

//   const Schemas = (step) => {
//     if (step === 1) {
//       return yupResolver(schema1);
//     } else if (step === 2) {
//       return yupResolver(schema2);
//     } else if (step === 3) {
//       return yupResolver(schema3);
//     }
//   };
//   const {
//     control,
//     handleSubmit,
//     register,
//     reset,
//     setValue,
//     getValues,
//     formState: { errors },
//   } = useForm({
//     defaultValue,
//     mode: "onChange",
//     resolver: Schemas(step),
//   });

//   const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
//     {
//       control, // control props comes from useForm (optional: if you are using FormContext)
//       name: "test", // unique name for your Field Array
//     }
//   );

//   const onSubmit = (data) => {
//     console.log("data", data);
//     //reset();
//     if (step === 3) {
//       console.log(data);
//       reset();
//     } else {
//      // setStep((prev) => prev + 1);
//     }
//   };

//   useEffect(()=>{
//     //setValue('lastName', "this is lastname field")
//    // setValue('firstName', "this is firstname field")
//   },[])
//  console.log('getValues ', getValues('lastName'))
//  console.log('erorssssssssssss ', errors);
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* {step===1 ?
//       <div>
//         <p>Step 1111111</p>
//         <Controller
//           name="firstName"
//           control={control}
//           defaultValue=""
//           render={({ field:{onChange, value} }) => (
//             <input placeholder="First Name"
//             onChange={onChange}
//             value={value}
//             style={{borderColor: errors.firstName?'red':'white'}} />
//           )}
//         />
//         {errors.firstName && <p style={{color:'red'}}>{errors.firstName.message}</p>}
//       </div>
//       :''}
//      {step===2?
//       <div>
//         <p>Step 2222222</p>
//         <Controller
//           name="lastName"
//           control={control}
//           defaultValue=""
//           render={({ field:{onChange, value} }) => (
//             <input 
//             onChange={onChange}
//             value={value} 
//             placeholder="Last Name" 
//             style={{borderColor: errors.lastName?'red':'white'}}
//             />
//           )}
//         />
//         {errors.lastName && <p style={{color:'red'}}>{errors.lastName.message}</p>}
//       </div>
//         :''}
//       {step===3 ?<div>
//         <p>Step 333333333</p>
//         <Controller
//           name="email"
//           control={control}
//           defaultValue=""
//           render={({ field:{onChange, value} }) => (
//             <input 
//             onChange={onChange}
//             value={value} placeholder="Email" 
//             style={{borderColor: errors.email?'red':'white'}} />
//           )}
//         />
//         {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}
//       </div>:''}
//       <button type="submit">{step===3?'Submit':'next'}</button> */}

//       {fields.map((field, index) => {
//         return(<div key={index}>
//              <Controller
//                 name={`test.${index}.firstName`}
//                 control={control}
//                 render={({ field:{onChange, value} }) => 
//                 <input
//                 {...register(`test.${index}.firstName`, { required: true })}
//                 style={{borderColor: errors.test?.[index]?.firstName?'red':'black'}}
//               />}
//               />
//               <p style={{color:'red'}}>{errors.test?.[index]?.firstName && errors.test?.[index]?.firstName.message}</p>
//               <Controller
//                 name={`test.${index}.lastName`}
//                 control={control}
//                 render={({ field:{onChange, value} }) => 
//                 <input
//                 {...register(`test.${index}.lasttName`, { required: true })}
//                 style={{borderColor: errors.test?.[index]?.lastName?'red':'black'}}
//               />}
//               />
//               <p style={{color:'red'}}>{errors.test?.[index]?.lastName && errors.test?.[index]?.lastName.message}</p>

//               <Controller
//                 name={`test.${index}.phone`}
//                 control={control}
//                 render={({ field:{onChange, value} }) => 
//                 <input
//                 {...register(`test.${index}.phone`, { required: true })}
//                 style={{borderColor: errors.test?.[index]?.phone?'red':'black'}}
//               />}
//               />
//               <p style={{color:'red'}}>{errors.test?.[index]?.phone && errors.test?.[index]?.phone.message}</p>
//               <button type="button" onClick={() => remove(index)}>
//                 Delete
//               </button>
//         </div>
//       )})}
//        {/* <button
//      style={{width:200}}
//           type="button"
//           onClick={() => {
//             prepend({ firstName: "prepend", lastName: "prepend", phone:"" });
//           }}
//         >
//           preppend
//         </button> */}
//      <button
//      style={{width:200}}
//           type="button"
//           onClick={() => {
//             append({ firstName: "", lastName: "", phone:"" });
//           }}
//         >
//           append
//         </button>

//         <button type="submit">submit</button>
//     </form>
//   );
// };

// export default FormComponent;
