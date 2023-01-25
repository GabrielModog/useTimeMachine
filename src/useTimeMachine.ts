import { useReducer } from 'react';
import { TimeMachineActions, TimeMachineState, TimeStepsParam } from './types';

export function useTimeMachine<T>(initialState: T) {
	const defaultState: TimeMachineState<T> = {
		past: [],
		present: initialState,
		future: [],
	};

	function reducer<T>(
		state: TimeMachineState<T>,
		action: TimeMachineActions<T>
	) {
		switch (action.type) {
			case 'RESET':
				return {
					past: [],
					present: initialState,
					future: [],
				};
			case 'PRESENT':
				return {
					past: [state.present, ...state.past],
					present: action.payload,
					future: [],
				};
			case 'BACKWARD': {
				const [currentPresent, ...newPast] = state.past;

				return {
					past: newPast,
					present: !currentPresent ? null : currentPresent,
					future: [state.present, ...state.future],
				};
			}
			case 'FORWARD': {
				const [currentPresent, ...newFuture] = state.future;

				return {
					past: [state.present, ...state.past],
					present: !currentPresent ? null : currentPresent,
					future: newFuture,
				};
			}
			default:
				return state;
		}
	}

	const [history, dispatch] = useReducer(reducer, defaultState);

	const hasPast = !(history.past.length === 0);
	const hasFuture = !(history.future.length === 0);

	function sendTo<T>(where: TimeStepsParam, value?: T) {
		dispatch({ type: where, payload: value });
	}

	function addToPresentState<T>(value?: T) {
		dispatch({ type: 'PRESENT', payload: value });
	}

	function resetHistory() {
		dispatch({ type: 'RESET' });
	}

	return {
		history,
		addToPresentState,
		sendTo,
		resetHistory,
		hasPast,
		hasFuture,
	};
}
