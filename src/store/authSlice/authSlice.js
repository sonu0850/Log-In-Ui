import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import http from "../../services/http/baseUrl"
import { Toastify } from "../../services/toastify/toastifyContainer"



// SING UP 

export const  signUp=createAsyncThunk("/authSlice/signUp",async(value)=>{
    console.log("sign val ", value);
 try{
    const response  = await http.post('/users/register', {
        firstName:value.firstName,
        lastName: value.lastName,
        email: value.email,
        password: value.password,
    })
    if (response.status===200) {
        return response.data
        
    } else {
        
    }
  
 } catch(err){
   return err.response.data
   

 }
})

// LOG IN \

export const logIn = createAsyncThunk('/authSlic/logIn',async(value)=>{
    console.log("recive log in value", value);
   try {
     const response = await http.post('/users/login',{
        email: value.email,
        password: value.password,
     })
     console.log("send log post ", response);
     if(response.data.success===true){
        return response.data
     }

   } catch (error) {
    return error.response.data
    
   }

   

})


// FORGET PASSWORD 
export const forGet = createAsyncThunk('/authSlic/forGet',async(value)=>{
    console.log("recive log in value", value);
   try {
     const response = await http.post('/users/forgotPassword',{
        email: value.email,
       
     })
     console.log("send log post ", response);
     if(response.data.success===true){
        return response.data
     }

   } catch (error) {
    return error.response.data
    
   }

   

})


    // UPDATE

export const upDate = createAsyncThunk('/authSlic/upDate',async({values, token})=>{
    console.log("recive log in value", values);
    console.log("recive log in value", token);
   try {
     const response = await http.put(`/users/updatePassword/${token.token}`,{
        password: values.newpassword,
       
     })
     console.log("send log post ", response);
     if(response.data.success===true){
        return response.data
     }

   } catch (error) {
    return error.response.data
    
   }

   

})
  




const authSlice=createSlice({
    name:"authSlice",
    initialState:{
        loading:false,
        show:false,
        openToastify:false
    },
    extraReducers:(builder)=>{
       builder
    //    registration
       .addCase(signUp.pending,(state,action)=>{
        state.loading=true

       })
       .addCase(signUp.fulfilled,(state,action)=>{
        console.log("action",action);
        if(action.payload.success===true){
           Toastify({value:true,msg:action.payload.message})
        } else{
            Toastify({value:false,msg:action.payload.message})
        }
        state.loading=false
        
       })
       .addCase(signUp.rejected,(state,action)=>{
  
       })
    //     login

    .addCase(logIn.pending,(state, action)=>{
state.loading= true
    })
    .addCase(logIn.fulfilled,(state, action)=>{
        if (action.payload.success===true) {
            Toastify({value:true,msg: action.payload.message})
            state.loading= false
            
        } else {

             Toastify({value:false,msg: action.payload.message})
        }
console.log("log aciton ", action);
    })
    .addCase(logIn.rejected,(state, action)=>{
        state.loading= false
        
    })

    //    forget

    .addCase(forGet.pending,(state, action)=>{
        state.loading= true
            })
            .addCase(forGet.fulfilled,(state, action)=>{
                if (action.payload.success===true) {
                    Toastify({value:true,msg: action.payload.message})
                    state.loading= false
                    
                } else {
        
                     Toastify({value:false,msg: action.payload.message})
                }
        console.log("log aciton ", action);
            })
            .addCase(forGet.rejected,(state, action)=>{
                state.loading= false
                
            })
    
 //    update

 .addCase(upDate.pending,(state, action)=>{
    state.loading= true
        })
        .addCase(upDate.fulfilled,(state, action)=>{
            if (action.payload.success===true) {
                Toastify({value:true,msg: action.payload.message})
                state.loading= false
                
            } else {
    
                 Toastify({value:false,msg: action.payload.message})
            }
    console.log("log aciton ", action);
        })
        .addCase(upDate.rejected,(state, action)=>{
            state.loading= false
            
        })
      
       
    }

})
export default authSlice.reducer