import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cart = createSlice({
    name : 'cart',
    initialState : {
        cart : [],
    } as CartArray,
    reducers : {
        // changeName(state){
        //     state.name = '이귀엽';
        // },
        // increase(state, action){
        //     state.id += action.payload;
        // }
        plusCount(state, action){
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        minusCount(state, action){
            const item = state.cart.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        addItem(state, action) {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cart.push({
                    id: action.payload.id,
                    name : action.payload.name,
                    quantity: 1,
                    price: action.payload.price,
                });
            }
        },
        resetCart(state) {
            state.cart = [];
        }
    }
})

export const {plusCount, minusCount, addItem, resetCart} = cart.actions;

export interface CartItem{
    id : number;
    name : string;
    quantity : number;
    price : number;
}

export interface CartArray {
    cart : CartItem[];
}

// export default configureStore({
//     reducer:{
//         cart : cart.reducer,
//     }
// })

const rootReducer = combineReducers({
    cart: cart.reducer
});

const persistConfig = {
    key : "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;