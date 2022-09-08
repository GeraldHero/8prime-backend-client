import {
  PROJECTS_LIST_SUCCESS,
  PROJECTS_LIST_REQUEST,
  PROJECTS_LIST_FAIL,
  PROJECT_REQUEST,
  PROJECT_SUCCESS,
  PROJECT_FAIL,
} from "../constants/projectConstant";

export const ProjectsList = (state = { projects: [] }, action) => {
  switch (action.type) {
    case PROJECTS_LIST_REQUEST:
      return { loading: true, projects: [] };
    case PROJECTS_LIST_SUCCESS:
      return { loading: false, projects: action.payload };
    case PROJECTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    case PROJECT_REQUEST:
      return { loading: true, projects: [] };
    case PROJECT_SUCCESS:
      return { loading: false, project: action.payload };
    case PROJECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
