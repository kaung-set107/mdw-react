import { createSlice } from "@reduxjs/toolkit";

const designSlice = createSlice({
    name: "design",
    initialState: {
        colors: {
            'ar7': '#9C9679', 
            'ar16': '#C79FDC', 'ar18': '#63A298', 'ar20': '#264075', 
            'ar21': '#000000',
            'ar26': '#BD8091',
            'ar32': '#002D03', 
            'ar36': '#C7004C',
            'ar43': '#F3E124', 'ar44': '#008694', 
            'ar48': '#8F803A',
            'ar57': '#490012', 
            'ar64': '#00A23B', 
            'ar66': '#2A1733', 'ar67': '#DA99CC', 'ar70': '#BAA54D',
            'ar75': '#704289', 'ar77': '#0E6833', 'ar79': '#AC4B62',
            'ar81': '#70691E', 'ar82': '#4D6DAD', 
            'ar88': '#0FB782', 'ar90': '#7F7E73', 
            'ar96': '#003C55', 'ar98': '#026D80', 
            'ar101': '#00A7B6',
            'ar106': '#4C4C4C',
        },
        
        orders: [],
        attachs: [],
        edit_testname: '',
        edit_testqty: '',
        edit_testprice: '',
        edit_file: '',
        edit_description: '',
        homesearch: false,
    },
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        removeOrder: (state, action) => {
            for (var i = 0; i < state.orders.length; i++) {
                if (state.orders[i].orderid === action.payload.id) {
                    state.orders.splice(i, 1);
                }
            }
        },
        editOrder: (state,action) => {
            for (var i = 0; i < state.orders.length; i++) {
                if (state.orders[i].orderid === action.payload.id) {
                    state.edit_testname = state.orders[i].testname;
                    state.edit_testqty = state.orders[i].testqty;
                    state.edit_testprice = state.orders[i].testprice;
                    state.orders.splice(i, 1);
                }
            }
        },
        resetOrder: (state) => {
            state.orders.length = 0;
        },
        addAttach: (state, action) => {
            state.attachs.push(action.payload);
        },
        removeAttach: (state, action) => {
            for (var i = 0; i < state.attachs.length; i++) {
                if (state.attachs[i].orderid === action.payload.id) {
                    state.attachs.splice(i, 1);
                }
            }
        },
        editAttach: (state,action) => {
            for (var i = 0; i < state.attachs.length; i++) {
                if (state.attachs[i].orderid === action.payload.id) {
                    state.edit_file = state.attachs[i].file;
                    state.edit_description = state.attachs[i].description;
                    state.edit_testqty = state.attachs[i].testqty;
                    state.edit_testprice = state.attachs[i].testprice;
                    state.attachs.splice(i, 1);
                }
            }
        },
        resetAttach: (state) => {
            state.attachs.length = 0;
        },
        showSearch: (state) => {
            state.homesearch = true;
        },
        resetSearch: (state) => {
            state.homesearch = false;
        }

    }
})

export const { addOrder, removeOrder,addAttach, removeAttach, resetOrder,resetAttach, editOrder,editAttach, showSearch,resetSearch } = designSlice.actions
export default designSlice.reducer;