import {createStore , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {productListReducer , productDetailsReducer} from './reducers/productsReducers'

const reducer = combineReducers({
    productList : productListReducer,
    productDetail : productDetailsReducer
})

const initialState = {}

const store = createStore(reducer , initialState , composeWithDevTools(applyMiddleware(thunk)))

export default store

