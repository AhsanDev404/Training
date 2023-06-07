import {configureStore} from '@reduxjs/toolkit'
import {customReducer} from './reducer'
const store = configureStore({
    reducer:{
        customReducer: customReducer,
    }
})

export default store
