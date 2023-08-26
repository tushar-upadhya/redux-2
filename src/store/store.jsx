import { createStore } from "redux";

import rootReducer from "../redux/reducer/combinedReducer";

const store = createStore(rootReducer);

export default store;
