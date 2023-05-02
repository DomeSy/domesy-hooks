import useEventListener from "../useEventListener";
import useSafeState from "../useSafeState";
import useLatest from "../useLatest";
import type { BasicTarget } from "../utils";

interface RectProps {
  top: number;
  left: number;
  bottom: number;
  right: number;
  height: number;
  width: number;
}

interface StateProps extends RectProps {
  text: string;
}

const initRect: RectProps = {
  top: NaN,
  left: NaN,
  bottom: NaN,
  right: NaN,
  height: NaN,
  width: NaN,
};

const initState: StateProps = {
  text: "",
  ...initRect,
};

const getRectSelection = (selection: Selection | null): RectProps | {} => {
  const range = selection?.getRangeAt(0);
  if (range) {
    const { height, width, top, left, right, bottom } =
      range.getBoundingClientRect();
    return { height, width, top, left, right, bottom };
  }
  return {};
};

const useTextSelection = (
  target: BasicTarget | Document = document
): StateProps => {
  const [state, setState] = useSafeState(initState);
  const lastRef = useLatest(state);

  useEventListener(
    "mouseup",
    () => {
      if (!window.getSelection) return;
      const select = window.getSelection();
      const text = select?.toString() || "";
      if (text) setState({ ...state, text, ...getRectSelection(select) });
    },
    target
  );

  useEventListener(
    "mousedown",
    () => {
      if (!window.getSelection) return;
      if (lastRef.current.text) setState({ ...initState });
      const select = window.getSelection();
      select?.removeAllRanges();
    },
    target
  );

  return state;
};

export default useTextSelection;
