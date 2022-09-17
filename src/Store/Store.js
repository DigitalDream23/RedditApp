import {configureStore, combineReducers} from '@reduxjs/toolkit';
import subRedditsReducer from '../Components/SubReddits/SubRedditsSlice';
import redditReducer from '../Components/Reddit/RedditSlice';

export default configureStore({
    reducer: combineReducers({
        subreddits: subRedditsReducer,
        reddit: redditReducer
    })
})