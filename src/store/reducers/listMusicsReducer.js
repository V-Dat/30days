const initialState = [];

const listMusicsReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case "CallApiSucess":
      newState = [ ...state, ...action.payload ];
      return (state = newState);
    case "CallApiFail":
      newState = [ ...state, ...action.payload ];
      return (state = newState);
    default:
      return state;
  }
};

export default listMusicsReducer;
