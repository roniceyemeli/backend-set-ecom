import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './rootReducer';
import thunk from 'redux-thunk'



const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const cartStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const primaryState = {
    cart: {
        cartItems: cartStorage
    }
}

const store = createStore(rootReducer,primaryState,compose(applyMiddleware(thunk),devtools))

export default store;