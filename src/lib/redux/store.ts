import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter-slice'
import todoReducer from './slices/todo-slice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
