import useSafeState from "../useSafeState";
import useEventListener from "../useEventListener";
import isBrowser from "../utils/isBrowser";

type ResponsiveConfig = Record<string, number>;
type ResponsiveInfo = Record<string, boolean>;

// bootstrap 对应的四种尺寸
let responsiveConfig: ResponsiveConfig = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

let info: ResponsiveInfo = {};

export const configResponsive = (config: ResponsiveConfig) => {
  responsiveConfig = config;
};

const clac = () => {
  const width = window.innerWidth;
  const newInfo = {} as ResponsiveInfo;
  let shouldUpdate = false;
  for (const key of Object.keys(responsiveConfig)) {
    newInfo[key] = width >= responsiveConfig[key];
    // 如果发生改变，则出发更新
    if (newInfo[key] !== info[key]) {
      shouldUpdate = true;
    }
  }
  if (shouldUpdate) {
    info = newInfo;
  }
  return {
    shouldUpdate,
    info,
  };
};

const useResponsive = () => {
  if (isBrowser) {
    clac();
  }

  const [state, setState] = useSafeState<ResponsiveInfo>(() => clac().info);

  useEventListener("resize", () => {
    const res = clac();
    if (res.shouldUpdate) setState(res.info);
  });

  return state;
};

export default useResponsive;
