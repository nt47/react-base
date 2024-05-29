//redux配置模板
import { configureStore } from "@reduxjs/toolkit";
import billReducer from "./modules/billSlice";//自定义状态管理器

const store = configureStore({
    reducer: {
        bill: billReducer
    }
});

export default store