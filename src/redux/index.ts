import { legacy_createStore as createStore, combineReducers, Store, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import global from "./modules/global/reducer";
import menu from "./modules/menu/reducer";
const reducer = combineReducers({
	global,
	menu
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
