import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    
    userData:undefined
    
}

export const customReducer = createReducer(initialState,{
    
    setUser:(state , action)=>{
        state.userData = action.payload
    }
})