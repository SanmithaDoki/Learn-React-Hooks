import React, { useReducer, useContext } from "react";
import "./App.css";
import CounterCustomOne from "./components/CustomHooks/CounterCustomOne";
import CounterCustomTwo from "./components/CustomHooks/CounterCustomTwo";
import DocTitleOne from "./components/CustomHooks/DocTitleOne";
import DocTitleTwo from "./components/CustomHooks/DocTitleTwo";
import UserForm from "./components/CustomHooks/UserForm";
import ParentComponent from "./components/useCallback/ParentComponent";

import ComponentC from "./components/useEffect/ComponentC";
import DataFetching from "./components/useEffect/DataFetching";
import HookCounterOne from "./components/useEffect/HookCounterOne";
import HookMouse from "./components/useEffect/HookMouse";
import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";
import MouseContainer from "./components/useEffect/MouseContainer";
import Counter from "./components/useMemo/Counter";
import CounterOne from "./components/useReducer/CounterOne";
import CounterThree from "./components/useReducer/CounterThree";
import CounterTwo from "./components/useReducer/CounterTwo";
import DataFetchingOne from "./components/useReducer/DataFetchingOne";
import DataFetchingTwo from "./components/useReducer/DataFetchingTwo";
import ComponentA from "./components/useReducerWithuseContext/ComponentA";
import ComponentB from "./components/useReducerWithuseContext/ComponentB";
import ComponentCC from "./components/useReducerWithuseContext/ComponentCC";
import FocusInput from "./components/useRef/FocusInput";
import HookTimer from "./components/useRef/HookTimer";
import ClassCounter from "./components/useState/ClassCounter";
import HookCounter from "./components/useState/HookCounter";
import HookCounterFour from "./components/useState/HookCounterFour";
import HookCounterThree from "./components/useState/HookCounterThree";
import HookCounterTwo from "./components/useState/HookCounterTwo";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (currentState, action) => {
  // it returns newState
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <UserForm />
      {/* <CounterCustomOne /> */}
      {/* <CounterCustomTwo /> */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo /> */}
      {/* <HookTimer /> */}
      {/* <FocusInput /> */}
      {/* <Counter /> */}
      {/* <ParentComponent /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingOne /> */}
      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentCC />
      </CountContext.Provider> */}
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value="Sanmitha">
        <ChannelContext.Provider value="Doki">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
