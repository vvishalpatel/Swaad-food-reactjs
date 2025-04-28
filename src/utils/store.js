import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,                 
    },

});

export default store;




/** **

* Create Store
*   - configureStore() - RTK
*
* Provide my store to app
*   - ‹Provider store = {store}> - import from react-redux
*
* Slice
*   - RTK - createSlice({   
*            name: "",
*            initialState:
*            reducers: {
*               addItem: (state, action)=> {state = action.payload }
*            }
*        })
*
*     export const faddItem, removeltem} = cartSlice.actions;
*     export default cartslice.reducer;
*
* Put that Slice into Store
*       - {
*          reducer: {
*               cart: cartSlice,
*               user: userSlice;
*           }
*        ｝
*/  