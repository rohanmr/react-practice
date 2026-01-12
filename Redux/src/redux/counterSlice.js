import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        resetValue: (state) => { state.value = 0 }
    }
})


export const { increment, decrement, resetValue } = counterSlice.actions
export default counterSlice.reducer