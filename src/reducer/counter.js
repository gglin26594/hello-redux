const counter = (state = 1, action = {}) => {
  switch (action.type) {
    case "INCREMENT1":
    {
      console.log("counter");
      return state + action.num;
    }
    case "INCREMENT":
    {
      return state + 1;
    }
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counter;
