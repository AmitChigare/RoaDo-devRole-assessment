import { FETCH_DATA } from "../actions/dashboardActions";
const initialState = {
  data: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
