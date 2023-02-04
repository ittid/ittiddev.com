import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchBlogFeed = createAsyncThunk("blogSlice/fetchUserInfo", async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
  };

  let request = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://ahnaineabd.medium.com/feed",
    requestOptions
  );
  let response = await request.json();
  return response.items;
});

export const blogSlice = createSlice({
  initialState: [],
  name: "userSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogFeed.pending, (state, action) => {
      console.warn("Promise is: «pending», please just wait a few secounds");
    });
    builder.addCase(fetchBlogFeed.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchBlogFeed.rejected, (state, action) => {
      throw new Error(
        "Request is rejected, please check your network connection and try again"
      );
    });
  },
});

export default blogSlice.reducer;
export { fetchBlogFeed };
