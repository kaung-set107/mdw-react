import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        total_pcs: 0,
        quantity: 0,
        total: 0,
        discount_value: 0,
        discount_type: '',
        name: '',
        phone: '',
        deliver_address: '',
        payment_type: '',
        payment_channel: '',
        remark: '',

    },
    reducers: {
        addProduct: (state, action) => {
          state.quantity += 1;
          state.total_pcs +=action.payload.quantity;
          state.total += action.payload.price * action.payload.quantity;
          state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            for (var i = 0; i < state.products.length; i++) {
                if (state.products[i].unitid === action.payload.id) {
                    state.products.splice(i, 1);
                }
            }
        },
        addCheckOutInfo: (state,action) => {
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.deliver_address = action.payload.deliver_address;
            state.payment_type = action.payload.payment_type;
            state.payment_channel = action.payload.payment_channel;
            state.remark = action.payload.remark;
        },
        resetProduct: (state) => {
            state.products.length = 0 ;
            state.total_pcs = 0;
            state.total = 0;
        },
        resetPcs: (state, action) => {
            state.total_pcs =action.payload.total_pcs;
            state.total = action.payload.total;
        
        },
    }
})

export const{addProduct,removeProduct,addCheckOutInfo, resetProduct,resetPcs} = cartSlice.actions
export default cartSlice.reducer;