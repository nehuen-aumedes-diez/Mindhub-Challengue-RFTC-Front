import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userAction";

const {newUser, signIn, signOut} = userActions

const initialState = {
    perfiles: [],
    name:"",
    logged: false,
    token:""
}

const userReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(newUser.fulfilled, (state, action)=>{
        if(action.payload.success){
            return state.perfiles.push(action.payload.response)
        }
    })
    builder.addCase(signIn.fulfilled, (state, action)=>{
        console.log(action)
        const{success , response }= action.payload
        if(success){
            let {user, token} = response
            localStorage.setItem('token', JSON.stringify({ token : token}))
            let newState={
                ...state,
                name: user.name,
                logged: true,
                token: token
            }
            
            return newState, console.log(initialState);
        } else{
            let newState={
                ...state,
                messagge: response
            }
            return newState
        }
    })
    builder.addCase(signOut, (state,action)=>{
        const{success , response }= action.payload
        if(success){
            localStorage.removeItem('token')
            let newState={
                ...state,
                name: "",
                logged: false,
                token: ""
            }
            return newState
        }else{
            let newState={
                ...state,
                messagge: response
            }
            return newState
        }
    })
})


export default userReducer