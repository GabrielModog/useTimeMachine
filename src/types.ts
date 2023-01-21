export interface TimeMachineState<T> {
	past: Array<T | any>;
	present: Array<T | any>;
	future: Array<T | any>;
}

export type TimeMachineActions =
	| { type: 'RESET' }
	| { type: 'BACKWARD' }
	| { type: 'FORWARD' };
