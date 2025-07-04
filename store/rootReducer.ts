// lib/redux/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import brandConfigReducer from "./slices/brandConfigSlice";
import commonConfigReducer from "./slices/commonConfigSlice";
import dataReducer from "./slices/dataSlice";

// Import other reducers here as you create them
// import userProfileReducer from './slices/userProfileSlice';

// Combine all feature reducers into a single root reducer
const rootReducer = combineReducers({
  brandConfig: brandConfigReducer,
  commonConfig: commonConfigReducer,
  data: dataReducer,
  // Add other reducers here:
  // userProfile: userProfileReducer,
});

// Export the combined root reducer
export default rootReducer;
