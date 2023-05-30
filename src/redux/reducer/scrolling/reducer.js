import { initialState } from "../../action/scrolling/state";
import { actionType } from "../../action/scrolling/type";

export const scrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.get_scroll_state:
      return { ...state };
    case actionType.set_scroll_state:
      return { ...state, scrollState: action.payload };
    default:
      return state;
  }
};
