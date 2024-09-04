import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: string
  title: string
  finishedAt: Date | null
}

interface PayloadToggleTodo {
  todoId: string
  finishedAt: Date | null
}

interface PayloadDeleteTodo {
  todoId: string
}

export interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [{ id: '1', title: 'Teste', finishedAt: null }],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },

    toggleTodo: (state, action: PayloadAction<PayloadToggleTodo>) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.todoId)

      if (todoIndex < 0) { return state }

      state.todos[todoIndex].finishedAt = action.payload.finishedAt
    },

    deleteTodo: (state, action: PayloadAction<PayloadDeleteTodo>) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.todoId)

      if (todoIndex < 0) { return state }

      state.todos.splice(todoIndex, 1)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
