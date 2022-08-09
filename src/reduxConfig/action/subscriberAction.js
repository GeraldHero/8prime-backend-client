import {
  SUBSCRIBERS_LIST_REQUEST,
  SUBSCRIBERS_LIST_SUCCESS,
  SUBSCRIBERS_LIST_FAIL,
} from '../../reduxConfig/constants/subscriberConstant';
import axios from 'axios';

export const getSubscribersList =
  (page = 1, limit = 10) =>
  async (dispatch) => {
    try {
      dispatch({ type: SUBSCRIBERS_LIST_REQUEST });
      const { data } = await axios.get(
        `/api/subscribers?page=${page}&limit=${limit}`
      );

      dispatch({
        type: SUBSCRIBERS_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SUBSCRIBERS_LIST_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.data.msg,
      });
    }
  };
