import { type ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
  name: string;
  duration: number;
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void,
  startTimers: () => void,
  stopTimers: () => void,
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState : TimersState = {
  isRunning: true,
  timers: []

}

type TimersContextProviderProps = {
  children: ReactNode;
};

type StopTimersAction = {
  type: 'STOP_TIMERS';
}

type StartTimersAction = {
  type: 'START_TIMERS';
}

type AddTimersAction = {
  type: 'ADD_TIMER';
  payload: Timer
}

type Action = StopTimersAction | StartTimersAction | AddTimersAction

// type Action = {
//   type: 'ADD_TIMER' | 'START_TIMERS' | 'STOP_TIMERS';
//   payload?: Timer
// }

const timersReducer = (state: TimersState, action: Action): TimersState => {
  if(action.type === 'START_TIMERS') {
    return {
      ...state,
      isRunning: true
    }
  }
  if(action.type === 'STOP_TIMERS') {
    return {
      ...state,
      isRunning: false
    }
  }
  if(action.type === 'ADD_TIMER') {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name || 'New Timer',
          duration: action.payload.duration || 5
        }
      ]
    }
  }

  return state;

}

export const TimersContext = createContext<TimersContextValue | null>(null);

export const useTimersContext = () => {
  const timersCtx = useContext(TimersContext);
  if (timersCtx === null) {
    throw new Error("Timer's ctx value is null");
  }
  return timersCtx
};

const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialState)
  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({type: 'ADD_TIMER', payload: timerData})
    },
    startTimers() {
      dispatch({type: 'START_TIMERS'})
    },
    stopTimers() {
      dispatch({type: 'STOP_TIMERS'})
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};

export default TimersContextProvider;
