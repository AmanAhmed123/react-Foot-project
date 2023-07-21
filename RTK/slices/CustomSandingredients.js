import { createSlice } from '@reduxjs/toolkit'

export const snadingredients = createSlice({
    initialState: [],
    name: "snadingredients",
    reducers: {
        getingredients: (state, action) => {
            state.push(action.payload)
        },
        remaoveingredients: (state, action) => {
          return state.filter((ele) => ele.name !== action.payload.name)
        },
        clearstate: () => {
          return []
        }
    }
})


export const {getingredients,remaoveingredients,clearstate} = snadingredients.actions;
export default snadingredients.reducer;