import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
changeLanugae:(state,action) =>{
    state.lang = action.payload
}
    }

})

export const {changeLanugae} = configSlice.actions;
export default configSlice.reducer;
