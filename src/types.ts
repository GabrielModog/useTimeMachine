export interface TimeMachineState<T> {
	past: Array<T | any>;
	present: T | any;
	future: Array<T | any>;
}

export type TimeStepsParam = 'RESET' | 'PRESENT' | 'BACKWARD' | 'FORWARD';

export type TimeMachineActions<T> =
	| { type: 'RESET' }
	| { type: 'PRESENT'; payload: T[] }
	| { type: 'BACKWARD' }
	| { type: 'FORWARD' };
