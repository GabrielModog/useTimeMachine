import { useReducer } from 'react';
import { TimeMachineActions, TimeMachineState } from './types';

export function useTimeMachine<T>(initialState: T[]) {
	const defaultState: TimeMachineState<T> = {
		past: [],
		present: initialState,
		future: [],
	};

	function reducer(state: TimeMachineState<T>, action: TimeMachineActions) {
		switch (action.type) {
			case 'RESET':
				return {
					past: [],
					present: initialState,
					future: [],
				};
			case 'BACKWARD': {
				const [currentPresent, ...newPast] = state.past;

				return {
					past: newPast,
					present: currentPresent,
					future: [state.present, ...state.future],
				};
			}
			case 'FORWARD': {
				const [currentPresent, ...newFuture] = state.future;

				return {
					past: [state.present, ...state.past],
					present: currentPresent,
					future: newFuture,
				};
			}
			default:
				return state;
		}
	}

	const [history, sendTo] = useReducer(reducer, defaultState);

	const hasPast = !(history.past.length === 0);
	const hasFuture = !(history.future.length === 0);

	return { history, sendTo, hasPast, hasFuture };
}
