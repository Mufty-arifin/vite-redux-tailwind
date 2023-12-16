import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRegisterUser = createAsyncThunk(
    "register/fetchRegisterUser", 
    async(userData)=>{
        try{
            const response = await fetch("https://reqres.in/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            if (!response.ok) {
                throw new Error("login fail");
            }
            console.log('respon ok');
            const data = await response.json();
            return data;
        }catch (error) {
            console.log(error);
            throw error
        }
    })

const registerSlice = createSlice({
    name: "register",
    initialState: {
        response: null,
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegisterUser.pending, (state) => {
                state.status = "loading";

            })
            .addCase(fetchRegisterUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.response = action.payload;
            })
            .addCase(fetchRegisterUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
})


export default registerSlice.reducer