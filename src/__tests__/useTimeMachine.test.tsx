import { act, renderHook } from '@testing-library/react-hooks/native';
import { useTimeMachine } from '../useTimeMachine';

const INITIAL_VALUE = ['Mock'];

test('Must return present value as "Mock"', () => {
	const { result } = renderHook(() => useTimeMachine(INITIAL_VALUE));
	const state = result.current.history.present;

	expect(state).toBe(INITIAL_VALUE);
});

test('Must return backward present value', () => {
	const { result } = renderHook(() => useTimeMachine(INITIAL_VALUE));

	act(() => {
		result.current.sendTo('BACKWARD');
	});

	expect(result.current.history.past).toBe(INITIAL_VALUE);
});
