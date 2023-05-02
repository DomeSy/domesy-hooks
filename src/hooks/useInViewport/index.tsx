import { useEffect } from "react";
import useSafeState from "../useSafeState";
import { getTarget } from "../utils";

interface Options {
  root?: any;
  rootMargin?: string;
  threshold?: number | number[];
}

const useInViewport = (target: any, options?: Options) => {
  const [inViewport, setInViewport] = useSafeState<boolean>();
  const [ratio, setRatio] = useSafeState<number>();

  useEffect(() => {
    const element = getTarget(target);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setInViewport(entry.isIntersecting);
          setRatio(entry.intersectionRatio);
        }
      },
      {
        ...options,
        root: options?.root ? getTarget(options.root) : null,
      }
    );

    observer?.observe(element);

    return () => {
      observer?.disconnect();
    };
  }, [target]);

  return [inViewport, ratio] as const;
};

export default useInViewport;
