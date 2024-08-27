import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Todo {
  id: string
  title: string
  finishedDate: Date | null
}

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333/todos' }),
  tagTypes: ['get-todo'],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => '',
      providesTags: ['get-todo'],
    }),
    updateTodo: builder.mutation<Todo, Partial<Todo> & Pick<Todo, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteTodo: builder.mutation<void, Pick<Todo, 'id'>>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['get-todo'],
    }),
  }),
})

export const { useGetTodosQuery, useUpdateTodoMutation, useDeleteTodoMutation } = todoApi
