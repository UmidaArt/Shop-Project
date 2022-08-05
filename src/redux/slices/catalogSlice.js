import {createSlice} from "@reduxjs/toolkit";

const catalogInitialState = {
    products: [],
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: catalogInitialState,
    reducers: {
        getCatalog: (state, action) => {
            state.products = action.payload
        },
    }
})

export const {getCatalog} = catalogSlice.actions
export default catalogSlice.reducer