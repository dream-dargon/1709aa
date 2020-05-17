import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist' // 合并 reduce
import storage from 'redux-persist/lib/storage' // 创建 store
// 多层对象 做数据持久化
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { login } from '@/reducer'

const rootPersistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  // 白名单 [reducer 目录内的 reduce 文件名]
  whitelist: ['login'],  
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose//时时观察redux

const myPersistReducer = persistReducer(
  rootPersistConfig,
  combineReducers({
    login
  }
))

const store = createStore(
  myPersistReducer,
   composeEnhancers(applyMiddleware(promise,thunk))
);

export { store }