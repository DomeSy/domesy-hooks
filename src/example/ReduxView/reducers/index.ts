interface Props {
  count: number;
  msg: string;
  flag: boolean;
}

export const initialState: Props = {
  count: 0,
  msg: "",
  flag: true,
};

export default function action(state = initialState, action: any) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
    case "sub":
      return {
        ...state,
        count: state.count - 1,
      };

    case "set":
      return {
        ...state,
        msg: action.value,
      };
    case "clear":
      return initialState;
    case "flag":
      return {
        ...state,
        flag: !state.flag,
      };
    default:
      return state;
  }
}
