import * as fromStore from "./actions";

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: "Eat Lunch", completed: false }],
};

export const reducer = (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case fromStore.ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];

      return {
        ...state,
        data,
      };
    }
    case fromStore.REMOVE_TODO: {
      const data = state.data.filter(
        (todo) => todo.label !== action.payload.label
      );

      return {
        ...state,
        data,
      };
    }
  }

  return state;
};
