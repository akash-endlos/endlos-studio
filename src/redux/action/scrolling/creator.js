import { actionType } from "./type";

export const getScrolling = (type, payload) => (dispatch) =>
  dispatch({
    type,
    payload,
  });

export const setScrollingState = (state) => (dispatch) =>
  dispatch({
    type: actionType.set_scroll_state,
    payload: state,
  });
