import { useReducer } from 'react';

import { HistoryMachineActions, HistoryMachineState } from './types';

function addHistory(state: HistoryMachineState, payload: any) {
	return {
		...state,
		pivotIndex: state.pivotIndex++,
		history: [...state.history, state.current],
		current: payload,
	};
}

function forwardState(state: HistoryMachineState) {
	return {
		...state,
		pivotIndex: state.pivotIndex++,
		history: state.history,
		current: state.history[state.pivotIndex++],
	};
}

function backwardState(state: HistoryMachineState) {
	return {
		...state,
		pivotIndex: state.pivotIndex--,
		history: state.history,
		current: state.history[state.pivotIndex--],
	};
}

export default function useHistoryMachine(initialState: any) {
	const defaultState: HistoryMachineState = {
		current: initialState,
		history: [],
		pivotIndex: 0,
	};

	function reducer(
		state: HistoryMachineState,
		action: HistoryMachineActions
	): typeof defaultState {
		switch (action.type) {
			case 'RESET':
				return {
					pivotIndex: 0,
					history: [],
					current: initialState,
				};
			case 'ADD_TO_HISTORY':
				return addHistory(state, action.payload);
			case 'FORWARD':
				return forwardState(state);
			case 'BACKWARD':
				return backwardState(state);
			default:
				return state;
		}
	}

	const [state, dispatch] = useReducer(reducer, defaultState);

	function setCurrentState(newCurrent: any) {
		dispatch({ type: 'ADD_TO_HISTORY', payload: newCurrent });
	}

	function goFoward() {
		dispatch({ type: 'FORWARD' });
	}

	function goBackward() {
		dispatch({ type: 'BACKWARD' });
	}

	function resetState() {
		dispatch({ type: 'RESET' });
	}

	return { state, setCurrentState, goFoward, goBackward, resetState };
}
