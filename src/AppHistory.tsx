import { RefObject, useEffect, useRef, useState } from "react";
import {
  Location,
  NavigationType,
  useLocation,
  useNavigationType,
} from "react-router";

function useAppHistory(): object {
  const location: Location = useLocation();
  location["title"] = document.title;

  const navigationType: NavigationType = useNavigationType();

  const idx: RefObject<number> = useRef<number>(-1);

  const [index, setIndex] = useState<number>(0);
  const stack: RefObject<object[]> = useRef<object[]>([location]);

  useEffect((): void => {
    if (navigationType === NavigationType.Push) {
      stack.current.splice(index + 1);
      stack.current.push(location);
      idx.current = history.state?.idx;
      setIndex(index + 1); // eslint-disable-line
    }
    if (navigationType === NavigationType.Pop) {
      if(idx.current!==-1){
        const indexDelta: number = history.state?.idx - idx.current;
        setIndex(index + indexDelta);
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
