//redux切片模板
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billSlice = createSlice({
    name: "bill",
    initialState: {
        billList: []
    },
    reducers: {
        setBillList(state, action) {
            state.billList = action.payload
        },
        addBill(state, action) {
            state.billList.push(action.payload)
        }
    }
});

//action creator
const { setBillList, addBill } = billSlice.actions
export { setBillList, addBill };

const billReducer = billSlice.reducer
export default billReducer;

//异步action
const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:8888/ka")// await 一定要加否则没数据
        dispatch(setBillList(res.data))
    }

}

const addBillList = (data) => {
    return async (dispatch) => {
        const res = await axios.post("http://localhost:8888/ka", data)
        //触发同步reducer
        //console.log('addBillList-> ', res.data)
        dispatch(addBill(res.data))
    }
}
export { getBillList, addBillList }