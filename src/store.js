import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reduxConfig/reducers/userReducers";
import { SubscribersList } from "./reduxConfig/reducers/subscriberReducer";
import { ProjectsList } from "./reduxConfig/reducers/projectReducer";
// Take note be careful in constant it can redirect to different reducers.
const reducer = combineReducers({
  userLogin: userLoginReducer,
  subscribers: SubscribersList,
  projects: ProjectsList,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
