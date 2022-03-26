const initialState = {
  name: "Tên Bài Hát",
  image: process.env.PUBLIC_URL + "/img/day8/default.jpg",
  mp3: null,
  index:-1,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isRotating: false,
};

const currentMusicReducer = (state = initialState, action) => {
  let newState = {}
  switch (action.type) {
    case "Next":
    newState = {...state,...action.payload}
    return state = newState;
    case "Prev":
      newState = {...state, ...action.payload}
      return state = newState;
    case "Random":
      newState = {...state, ...action.payload}
      return state = newState;
    case "Repeat":
      newState = {...state, ...action.payload}
      return state = newState;
    case "Play":
      return state = {...state, ...action.payload};
    case "Pause":
      return state = {...state, ...action.payload};
    case "Goto":
      newState = {...state, ...action.payload}
      return state = newState;
    default:
      return state;
  }
};

export default currentMusicReducer;
