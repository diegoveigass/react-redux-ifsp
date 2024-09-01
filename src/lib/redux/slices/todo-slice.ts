import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Todo {
  id: string
  title: string
  finishedDate: string | null
}

interface TodoState {
  todos: Todo[]
}

interface ToggleTodoFinishedPayload {
  id: string
  finishedDate: string | null
}

const initialState: TodoState = {
  todos: [
    {
      id: new Date().getTime().toString(),
      title: 'Teste',
      finishedDate: null,
    },
  ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    toggleTodoFinished: (
      state,
      action: PayloadAction<ToggleTodoFinishedPayload>,
    ) => {
      const todoIndex =
        state.todos.findIndex(todo => todo.id === action.payload.id)

      if (todoIndex < 0) { return state }

      state.todos[todoIndex].finishedDate = action.payload.finishedDate
    },
    deleteTodo: (state, action: PayloadAction<{ todoId: string }>) => {
      const todoIndex =
        state.todos.findIndex(todo => todo.id === action.payload.todoId)

      if (todoIndex < 0) { return state }

      state.todos.splice(todoIndex, 1)
    },
  },
})

export const { addTodo, toggleTodoFinished, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
