import { combineReducers } from "redux";
import homeVideos from "./homeVideo";

const rootRedcucer = combineReducers({
    homeVideos: homeVideos
})

export default rootRedcucer;