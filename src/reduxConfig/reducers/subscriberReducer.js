import {
  SUBSCRIBERS_LIST_REQUEST,
  SUBSCRIBERS_LIST_SUCCESS,
  SUBSCRIBERS_LIST_FAIL,
  SUBSCRIBERS_REMOVE_LIST,
  SUBSCRIBERS_DELETE_SUCCESS,
  SUBSCRIBERS_DELETE_FAIL,
} from '../../reduxConfig/constants/subscriberConstant';

export const SubscribersList = (state = { subscribers: [] }, action) => {
  switch (action.type) {
    case SUBSCRIBERS_LIST_REQUEST:
      return { loading: true, subscribers: [] };
    case SUBSCRIBERS_LIST_SUCCESS:
      return { loading: false, subscribers: action.payload };
    case SUBSCRIBERS_LIST_FAIL:
      return { loading: false, error: action.payload };

    case SUBSCRIBERS_DELETE_SUCCESS:
      return state;
    case SUBSCRIBERS_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case SUBSCRIBERS_REMOVE_LIST:
      return { loading: false, subscribers: [] };
    default:
      return state;
  }
};
