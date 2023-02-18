export interface TimeMachineState<T> {
	past: Array<T | any>;
	present: T | any;
	future: Array<T | any>;
}

export type TimeMachineMode = 'time' | 'history';

export type TimeStepsParam = 'RESET' | 'PRESENT' | 'BACKWARD' | 'FORWARD';

export type TimeMachineActions<T> =
	| { type: 'RESET' }
	| { type: 'PRESENT'; payload: T[] }
	| { type: 'BACKWARD' }
	| { type: 'FORWARD' };

export interface HistoryMachineState {
	history: any[];
	current: any;
	pivotIndex: number;
}

export type HistoryMachineActions =
	| { type: 'RESET' }
	| { type: 'ADD_TO_HISTORY'; payload: any }
	| { type: 'BACKWARD' }
	| { type: 'FORWARD' };
