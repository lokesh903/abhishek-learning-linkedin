import {configureStore} from '@reduxjs/toolkit';
import userDetails  from '../feacture/userDetailsSlice';


export const store=configureStore({
    reducer:{
        app:userDetails
    }
})