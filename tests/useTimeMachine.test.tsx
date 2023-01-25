import { act, renderHook } from '@testing-library/react-hooks/native';
import { useTimeMachine } from '../src/useTimeMachine';

const INITIAL_VALUE = ['Mock'];

describe('Prime cases test suite', () => {
	test('Must return present value as "Mock"', () => {
		const { result } = renderHook(() => useTimeMachine(INITIAL_VALUE));
		const state = result.current.history.present;

		expect(state).toBe(INITIAL_VALUE);
	});

	test('Must add a state to present', () => {
		const { result } = renderHook(() => useTimeMachine([0]));

		act(() => {
			result.current.sendTo('PRESENT', [4]);
		});

		expect(result.current.history.present).toStrictEqual([4]);
	});

	test('Must return future value when backwards', () => {
		const { result } = renderHook(() => useTimeMachine(INITIAL_VALUE));

		act(() => {
			result.current.sendTo('BACKWARD');
		});

		expect(result.current.history.future[0]).toBe(INITIAL_VALUE);
	});

	test('Must return past value when forwards', () => {
		const MOCK = ['present'];
		const { result } = renderHook(() => useTimeMachine(MOCK));

		act(() => {
			result.current.sendTo('FORWARD');
		});

		expect(result.current.history.past[0]).toBe(MOCK);
	});

	test('Must return empty when reset state', () => {
		const MOCK = ['present'];
		const { result } = renderHook(() => useTimeMachine(MOCK));

		act(() => {
			result.current.sendTo('FORWARD');
			result.current.sendTo('BACKWARD');
			result.current.sendTo('RESET');
		});

		expect(result.current.history.present).toBe(MOCK);
	});
});

describe('Real case test suite', () => {
	test('Board tile history', () => {
		const INTITIAL_BOARD_STATE = Array(9).fill(null);

		const { result } = renderHook(() => useTimeMachine(INTITIAL_BOARD_STATE));

		act(() => {
			result.current.sendTo('BACKWARD');
		});

		expect(result.current.history.future).toStrictEqual([INTITIAL_BOARD_STATE]);
	});
});
