/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-02 11:49:39
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-13 16:40:28
 * @FilePath: \react-admin\src\redux\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { legacy_createStore as createStore, combineReducers, Store, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import global from "./modules/global/reducer";
import menu from "./modules/menu/reducer";
import analysis from "./modules/analysis/reducer";
const reducer = combineReducers({
	global,
	menu,
	analysis
});

// redux 持久化
const peristConfig = {
	key: "redux-state",
	storage: storage
};

const persistReducerConfig = persistReducer(peristConfig, reducer);

// 开启 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//使用redux中间件
const middleWares = applyMiddleware(reduxThunk, reduxPromise);

// 创建store

const store: Store = createStore(persistReducerConfig, composeEnhancers(middleWares));

//创建持久化 store
const persistor = persistStore(store);

export { store, persistor };
