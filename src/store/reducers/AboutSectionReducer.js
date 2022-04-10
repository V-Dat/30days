const initialState = {
  infor: true,
  project: false,
  objective: false,
};

const AboutSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setInfor":
      return { ...state, ...action.payload };
    case "setProject":
      return { ...state, ...action.payload };
    case "setObjective":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default AboutSectionReducer;
