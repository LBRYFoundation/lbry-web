import {RefObject, useEffect, useRef, useState} from "react";
import {Location, NavigationType, useLocation, useNavigationType} from "react-router";

function useAppHistory(): object{
    const location: Location = useLocation();
    const navigationType: NavigationType = useNavigationType();

    const [idx, setIdx] = useState(-1);

    const [index, setIndex] = useState(-1);
    const stack: RefObject<object[]> = useRef<object[]>([location]);

    useEffect((): void => {
        if(navigationType===NavigationType.Push){
            stack.current.splice(index+1);
            stack.current.push(location);
            setIdx(history.state.idx);
            setIndex(index+1);
        }
        if(navigationType===NavigationType.Pop){
            if(idx>history.state.idx){
                setIndex(index-1);
            }
            if(idx<history.state.idx){
                setIndex(index+1);
            }
            setIdx(history.state.idx);
        }
        if(navigationType===NavigationType.Replace){
            stack.current[index] = location;
        }
    },[location,navigationType]);

    function getPrevious(): object[]{
        return stack.current.slice(0,index);
    }
    function getNext(): object[]{
        return stack.current.slice(index+1);
    }

    return {
        getNext,
        getPrevious,
    };
}

export default useAppHistory;
