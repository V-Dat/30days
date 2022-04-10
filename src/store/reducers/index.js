import { combineReducers } from "redux";
import AboutSectionReducer from "./AboutSectionReducer";
import currentMusicReducer from "./currentMusicReducer";
import listMusicsReducer from "./listMusicsReducer";

const rootReducer = combineReducers({
  currentMusicReducer: currentMusicReducer,
  listMusicsReducer: listMusicsReducer,
  AboutSectionReducer: AboutSectionReducer,
});
export default rootReducer;
