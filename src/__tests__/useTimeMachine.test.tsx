import { renderHook } from '@testing-library/react-hooks/native';
import { useTimeMachine } from '../useTimeMachine';

test('Must return present value as "Mock"', () => {
	const initialState = ['Mock'];
	const { result } = renderHook(() => useTimeMachine(initialState));
	const state = result.current[0];

	expect(state.present).toBe(initialState);
});
