import { combineReducers } from "redux";

import { allRoomsReducer, RoomDetailsReducer } from "./roomReducer";

const mainReducer = combineReducers({
  allRooms: allRoomsReducer,
  RoomDetails: RoomDetailsReducer
});

export default mainReducer;
