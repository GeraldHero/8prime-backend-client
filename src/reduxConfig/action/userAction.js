import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstant';
import setAuthToken from '../utils/setAuthToken';
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // Send/Post username and password to server by using json body type
    const { data } = await axios.post(
      '/api/auth',
      {
        username,
        password,
      },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    setAuthToken(data.token);
    localStorage.setItem('userInfo', JSON.stringify(data));
    return;
  } catch (error) {
    return dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.msg,
    });
  }
};

export const logout = (userInfo) => async (dispatch) => {
  try {
    await axios.post('/api/auth/logout');
    setAuthToken();
    localStorage.removeItem('userInfo');
    return dispatch({
      type: USER_LOGOUT,
    });
  } catch (error) {
    return;
  }
};
