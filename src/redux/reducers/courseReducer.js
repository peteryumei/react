export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      //state.push(action.course); // bad: mutate state
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
