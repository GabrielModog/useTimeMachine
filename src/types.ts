export interface TimeMachineState<T> {
  past: Array<any>;
  present: Array<any>;
  future: Array<any>;
}

export type TimeMachineActions =
  | { type: "RESET" }
  | { type: "BACKWARD" }
  | { type: "FORWARD" };
