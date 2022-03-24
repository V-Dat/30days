import { combineReducers } from "redux";
import currentMusicReducer from "./currentMusicReducer";
import listMusicsReducer from "./listMusicsReducer";

const rootReducer = combineReducers({
  currentMusicReducer: currentMusicReducer,
  listMusicsReducer:listMusicsReducer,

});
export default rootReducer;
