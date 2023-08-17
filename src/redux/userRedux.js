import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        id:'',
        name: '',
        phone: '',
        address: '',
        email: '',
        url: 'http://familyuniformapp.medicalworld.com.mm',
        // url: 'http://localhost:8000',
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching =true
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure:(state)=>{
            state.isFetching = false;
            state.error = true;
        },
        setUserInfo: (state,action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.address = action.payload.address;
            state.email = action.payload.email;
        },
        LogoutProcess: (state) => {
            state.id = '';
            state.name = '';
            state.phone = '';
            state.address = '';
            state.email = '';
        }
    }
})

export const{loginStart,loginSuccess,loginFailure,setUserInfo,LogoutProcess} = userSlice.actions
export default userSlice.reducer;