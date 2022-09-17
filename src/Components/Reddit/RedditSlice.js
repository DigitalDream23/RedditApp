import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const fetchSubredditPosts = createAsyncThunk('reddit/getSubredditPosts',
    async(subreddit) => {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const json = await response.json();
        return json.data.children.map(post => post.data)
    });


export const fetchPostComments = createAsyncThunk('reddit/getPostComments',
async(postId)=>{
    const response = await fetch(`https://www.reddit.com/comments/${postId}`);
    const json = response.json();
    return json
})

export const fetchSearchResults = createAsyncThunk('reddit/getSearchPosts', 
async (term) => {
    const response = await fetch(`https://www.reddit.com/search?q=${term}`, {mode:'opaque'});
    const json = await response.json();
    console.log(json);
    return json.data.children.map(post => post.data);
    
});


const redditSlice = createSlice({
    name: 'reddit',
    initialState:{
        posts:[],
        isLoading: false,
        hasError: false,
        searchTerm:'',
        currentSubreddit:'AskReddit'
    },
    reducers: {
        setCurrentSubreddit: (state, action)=>{
            state.currentSubreddit = action.payload;
        },
        setPosts:(state, action)=>{
            state.posts = action.payload
        },
        setSearchTerm: (state, action)=>{
            state.searchTerm = action.payload
        },
        clearSearchTerm: (state)=>{
            state.searchTerm = ''
        }
    },
    extraReducers:{
        [fetchSubredditPosts.pending]:(state)=>{
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchSubredditPosts.fulfilled]:(state, action)=>{
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload
        },
        [fetchSubredditPosts.rejected]:(state)=>{
            state.isLoading = false;
            state.hasError = true;
        },
        [fetchSearchResults.pending]:(state)=>{
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchSearchResults.fulfilled]:(state, action)=>{
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload;
            state.currentSubreddit = '';
            state.searchTerm = '';
        },
        [fetchSearchResults.rejected]:(state)=>{
            state.isLoading = false;
            state.hasError = true;
        }
    }
})


export const {
    setPosts,
    setCurrentSubreddit,
    setSearchTerm,
    clearSearchTerm
    
  } = redditSlice.actions;
  
  export default redditSlice.reducer;

