import * as actions from "../actions/user_actions";

const initialState = {
  user: {
    name: "",
    family: "",
    mobile: "",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_SET_USER":
      return {
        ...state,
        user: action.payload,
      }
    default: {
      return state;
    }
  }
};

export default userReducer;
