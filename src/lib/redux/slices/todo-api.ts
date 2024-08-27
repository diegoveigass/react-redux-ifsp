import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Todo {
  id: string
  title: string
  finishedDate: Date | null
}

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333/' }),
  tagTypes: ['get-todo'],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => '/todos',
      providesTags: ['get-todo'],
    }),
    updateTodo: builder.mutation<Todo, Pick<Todo, 'id' | 'finishedDate'>>({
      query: ({ id, ...patch }) => ({
        url: `todos/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['get-todo'],
    }),
    deleteTodo: builder.mutation<void, Pick<Todo, 'id'>>({
      query: ({ id }) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['get-todo'],
    }),
    createTodo: builder.mutation<void, Pick<Todo, 'id' | 'title'>>({
      query: ({ id, title }) => ({
        url: 'todos',
        body: { id, title, finishedDate: null },
        method: 'POST',
      }),
      invalidatesTags: ['get-todo'],
    }),
  }),
})

export const {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useCreateTodoMutation,
} = todoApi
