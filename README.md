## ⏲️ useTimeMachine

A simple React.js hook to go forward and backwards with your state.

<hr>

#### Sample

```jsx
 import { useTimeMachine } from "use-time-machine"

  function App(){
    const [currentState, sendTo, hasPast, hasFuture] = useTimeMachine([...]);

    return <div>...</div>
  }
```

<sub> by [@GabrielModog](https://twitter.com/gabrielmodog) - say hi! </sub>
