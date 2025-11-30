import { RefObject, useEffect, useRef, useState } from "react";
import {
  Location,
  NavigationType,
  useLocation,
  useNavigationType,
} from "react-router";

function useAppHistory(): object {
  const location: Location = useLocation();
  const navigationType: NavigationType = useNavigationType();

  const idx: RefObject<number> = useRef<number>(-1);

  const [index, setIndex] = useState(-1);
  const stack: RefObject<object[]> = useRef<object[]>([location]);

  useEffect((): void => {
    if (navigationType === NavigationType.Push) {
      stack.current.splice(index + 1);
      stack.current.push(location);
      idx.current = history.state?.idx;
      setIndex(index + 1); // eslint-disable-line
    }
    if (navigationType === NavigationType.Pop) {
      if (idx.current > history.state?.idx) {
        setIndex(index - 1);
      }
      if (idx.current < history.state?.idx) {
        setIndex(index + 1);
      }
      idx.current = history.state?.idx;
    }
    if (navigationType === NavigationType.Replace) {
      stack.current[index] = location;
      idx.current = history.state?.idx;
    }
  }, [location, navigationType]); // eslint-disable-line

  function getPrevious(): object[] {
    return stack.current.slice(0, index);
  }
  function getNext(): object[] {
    return stack.current.slice(index + 1);
  }

  return {
    getNext,
    getPrevious,
  };
}

export default useAppHistory;
