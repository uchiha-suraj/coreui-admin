import { combineReducers } from "redux";
import auth from "./auth";

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  nav: changeState,
  auth
});
