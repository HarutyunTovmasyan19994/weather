import { combineReducers } from "redux";
import reducer from "./weatherReducer/index,js";

const rootReducers = combineReducers({
    weahter:reducer,
})

export default rootReducers