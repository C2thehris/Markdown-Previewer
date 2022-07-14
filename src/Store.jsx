import { combineReducers, configureStore } from "@reduxjs/toolkit"
import markdownReducer from './Markdown';

const allReducers = markdownReducer;
// const allReducers = combineReducers({
  
// });


export default configureStore({reducer: allReducers});