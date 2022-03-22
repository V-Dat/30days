import { combineReducers } from "redux";
import currentMusicReducer from "./currentMusicReducer";

const rootReducer = combineReducers({
  currentMusicReducer: currentMusicReducer,
});
export default rootReducer;
