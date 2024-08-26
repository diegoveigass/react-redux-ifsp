import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './lib/redux/hooks/useRedux'
import {
  decrement,
  increment,
  incrementByAmount,
} from './lib/redux/slices/counter-slice'

export function App() {
  const [amountToIncrement, setAmountToIncrement] = useState(0)

  const dispatch = useAppDispatch()

  const { value } = useAppSelector(state => state.counter)

  function handleIncrement() {
    dispatch(increment())
  }

  function handleDecrement() {
    dispatch(decrement())
  }

  function handleIncrementByAmount() {
    dispatch(incrementByAmount(amountToIncrement))
    setAmountToIncrement(0)
  }

  return (
    <div className="app">
      <div>
        <button onClick={handleIncrement}>+</button>
        <span>{value}</span>
        <button onClick={handleDecrement}>-</button>
      </div>

      <div>
        <input
          type="number"
          value={amountToIncrement}
          onChange={(event) => setAmountToIncrement(event.target.valueAsNumber)}
        />
        <button onClick={handleIncrementByAmount}>Add value</button>
      </div>
    </div>
  )
}
