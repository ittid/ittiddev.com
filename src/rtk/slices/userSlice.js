import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserInfo = createAsyncThunk("userSlice/fetchUserInfo", async () => {
  let request = await fetch("https://api.github.com/users/ittid/repos");
  let response = await request.json();
  return response;
});

export const userSlice = createSlice({
  initialState: [],
  name: "userSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.pending, (state, action) => {
      console.warn("Promise is: «pending», please just wait a few secounds");
    });
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchUserInfo.rejected, (state, action) => {
      throw new Error(
        "Request is rejected, please check your network connection and try again"
      );
    });
  },
});

export default userSlice.reducer;
export { fetchUserInfo };
