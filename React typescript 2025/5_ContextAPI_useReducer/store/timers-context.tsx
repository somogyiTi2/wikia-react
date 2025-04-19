import { type ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
    name: string;
    duration: number;
};

type TimerState = {
    isRunning: boolean;
    timers: Timer[];
};

const initialState: TimerState = {
    isRunning: true,
    timers: [],
};

type TimersContextValue = TimerState & {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
};

export const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCtx = useContext(TimersContext);
    if (timersCtx === null) {
        throw new Error("TimersContext is null - that should not be the case!");
    }
    return timersCtx;
}

type TimersContextProviderProps = { children: ReactNode };

type StartTimersAction = {
    type: "START_TIMERS";
};
type StopTimersAction = {
    type: "STOP_TIMERS";
};
type AddTimersAction = {
    type: "ADD_TIMER";
    payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimersAction;

function timersReducer(state: TimerState, action: Action): TimerState {
    switch (action.type) {
        case "START_TIMERS":
            return { ...state, isRunning: true };

        case "STOP_TIMERS":
            return { ...state, isRunning: false };

        case "ADD_TIMER":
            return {
                ...state,
                timers: [...state.timers, action.payload],
            };

        default:
            return state;
    }
}

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
    const [timersState, dispatch] = useReducer(timersReducer, initialState);

    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData) {
            dispatch({ type: "ADD_TIMER", payload: timerData });
        },
        startTimers() {
            dispatch({ type: "START_TIMERS" });
        },
        stopTimers() {
            dispatch({ type: "STOP_TIMERS" });
        },
    };

    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>;
}
