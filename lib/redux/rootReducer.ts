// lib/redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import brandConfigReducer from './slices/brandConfigSlice';
// Import other reducers here as you create them
// import userProfileReducer from './slices/userProfileSlice';

// Combine all feature reducers into a single root reducer
const rootReducer = combineReducers({
    brandConfig: brandConfigReducer,
    // Add other reducers here:
    // userProfile: userProfileReducer,
});

// Export the combined root reducer
export default rootReducer;