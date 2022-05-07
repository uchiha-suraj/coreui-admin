import { AUTH, LOGOUT } from '../constants/actionTypes';

const initialState = {
  token: localStorage.getItem('x-token'),
  // isAuthenticated: localStorage.getItem('token') ? true : false, // or just !!localStorage.getItem('token')
  // isLoading: false,
  // isRegistered: false,
  // authData: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:

      console.log(action);
      // localStorage.setItem('authData', JSON.stringify({ ...action?.data }))

      localStorage.setItem("x-token", action.data.token)
      

      return { 
        ...state, 
        token: action.data.token,
        // authData: action?.data, 
      };

    case LOGOUT:
      localStorage.removeItem("x-token");

      return { 
        ...state, 
        token: null,
        // authData: null 
      };
    
    

    default: 
      return state;
  }
};

export default authReducer;