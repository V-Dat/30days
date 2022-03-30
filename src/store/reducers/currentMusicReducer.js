const initialState = {
  name: "Tên Bài Hát",
  image: process.env.PUBLIC_URL + "/img/day8/default.jpg",
  mp3: null,
  index: -1,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isRotating: false,
  isSeeking: false,
  musicDuration: 0,
  musicCurrentTime: 0,
  currentPercent: 0,
};

const currentMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Next":
      return (state = { ...state, ...action.payload });
    case "Prev":
      return (state = { ...state, ...action.payload });
    case "Random":
      return (state = { ...state, ...action.payload });
    case "Repeat":
      return (state = { ...state, ...action.payload });
    case "Play":
      return (state = { ...state, ...action.payload });
    case "Pause":
      return (state = { ...state, ...action.payload });
    case "Goto":
      return (state = { ...state, ...action.payload });
    case "Seeking":
      return (state = { ...state, ...action.payload });
    case "setMusicDuration":
      return (state = { ...state, ...action.payload });
    case "setMusicCurrentTime":
      return (state = { ...state, ...action.payload });
    case "setCurrentPercent":
      return (state = { ...state, ...action.payload });
    default:
      return state;
  }
};

export default currentMusicReducer;
