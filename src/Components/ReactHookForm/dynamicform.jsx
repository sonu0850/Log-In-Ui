

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
// const Dynamic = () => {
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

// //   useEffect(()=>{
// //     //setValue('lastName', "this is lastname field")
// //    // setValue('firstName', "this is firstname field")
// //   },[])
//  console.log('getValues ', getValues('lastName'))
//  console.log('erorssssssssssss ', errors);
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
     

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

// export default Dynamic;
