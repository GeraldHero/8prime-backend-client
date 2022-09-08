import {
  PROJECTS_LIST_FAIL,
  PROJECTS_LIST_REQUEST,
  PROJECTS_LIST_SUCCESS,
  PROJECT_SUCCESS,
  PROJECT_REQUEST,
  PROJECT_FAIL,
} from "../constants/projectConstant";

import axios from "axios";

export const getProjectsList =
  (page = 1, limit = 10) =>
  async (dispatch) => {
    try {
      dispatch({ type: PROJECTS_LIST_REQUEST });
      const { data } = await axios.get(
        `/api/projects?page=${page}&limit=${limit}`
      );
      dispatch({
        type: PROJECTS_LIST_SUCCESS,
        payload: data.projects,
      });
    } catch (error) {
      dispatch({
        type: PROJECTS_LIST_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.data.msg,
      });
    }
  };

export const getSpecificProject = (projectId) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_REQUEST });

    const { data } = await axios.get(`/api/projects/${projectId}`);

    dispatch({
      type: PROJECT_SUCCESS,
      payload: data.project,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.data.msg,
    });
  }
};
