import { SET_CITY } from "./type";

const DEFAULT_CITY = {
  name: "Sydney",
  id: 2147714,
};

export default (state = DEFAULT_CITY, action) => {
  switch (action.type) {
    case SET_CITY:
      return action.city;

    default:
      return state;
  }
};
