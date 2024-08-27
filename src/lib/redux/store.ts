import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter-slice'
import { todoApi } from './slices/todo-api'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [todoApi.reducerPath]: todoApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(todoApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
