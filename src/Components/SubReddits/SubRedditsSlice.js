import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setCurrentSubreddit } from "../Reddit/RedditSlice";




export const fetchSubreddits = createAsyncThunk('subreddits/getSubreddits',
    async() => {
        const response = await fetch('https://www.reddit.com/subreddits.json');
        const json = await response.json();
        return json.data.children.map(subreddit => subreddit.data)
    });



const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits:[],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers:{
        [fetchSubreddits.pending]:(state, action)=>{
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchSubreddits.fulfilled]:(state, action)=>{
            state.isLoading = false;
            state.hasError = false;
            state.subreddits = action.payload
        },
        [fetchSubreddits.rejected]: (state, action)=>{
            state.isLoading = false;
            state.hasError = true
        }
    }
});




export default subredditsSlice.reducer;

export const selectTargetSubredditIcon = (state, currentSubreddit) => {
    for(let item of state.subreddits.subreddits){
        if(item.display_name === currentSubreddit){
            return item.icon_img
        }
    }
};