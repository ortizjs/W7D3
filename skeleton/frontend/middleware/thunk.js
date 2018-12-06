
export const thunk = ({dispatch, getState}) => (next) => (action) => {
  if (typeof action === Function) {
    return action(dispatch, getState);
  }
  return next(action);
};