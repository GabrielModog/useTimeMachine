## ⏲️ useTimeMachine

A simple React.js hook to go forward and backwards with your state.

<hr>

## Install now

```
  yarn add use-time-machine
```

or

```
  npm i use-time-machine
```

#### Samples

```jsx
 import { useTimeMachine } from "use-time-machine"

  function App(){
    const {history, sendTo, hasPast, hasFuture} = useTimeMachine([...]);

    return <div>...</div>
  }
```

```jsx
import { useHistoryMachine } from 'use-time-machine';

function App() {
	const { state, setCurrentState, goFoward, goBackward, resetState } =
		useHistoryMachine('test');

	return <div>...</div>;
}
```

<sub> by [@GabrielModog](https://twitter.com/gabrielmodog) - say hi! </sub>
