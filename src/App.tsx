/* eslint-disable @stylistic/max-len */
import { NotepadText, PlusCircle, Trash } from 'lucide-react'
import logoImg from './assets/logo.svg'
import { useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from './lib/redux/slices/todo-api'

export function App() {
  const { data: todos } = useGetTodosQuery()
  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()

  return (
    <div className="h-screen">
      <header className="bg-gray-950 flex items-center justify-center h-48">
        <img src={logoImg} alt="" className="w-32 h-12 object-cover" />
      </header>

      <main className="max-w-3xl m-auto space-y-16">
        <form className="flex -mt-4 gap-2">
          <input
            type="text"
            className="outline-none flex-1 rounded-lg bg-gray-800 p-4 placeholder:text-gray-600 ring-sky-400 ring-offset-2 ring-offset-sky-950 focus-within:ring-1"
            placeholder="Adicione uma nova tarefa"
          />
          <button className="flex items-center justify-center bg-sky-600 gap-2 rounded-lg font-bold p-4 hover:bg-sky-700 transition-all">
            Criar
            <PlusCircle className="size-4" />
          </button>
        </form>

        <div className="space-y-6">
          <header className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-2">
              <span className="font-bold text-sky-500">Tarefas criadas</span>{' '}
              <span className="text-sm font-bold bg-gray-700 rounded-full px-2 py-[2px] text-gray-300">0</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="font-bold text-purple-500">Concluídas</span>{' '}
              <span className="text-sm font-bold bg-gray-700 rounded-full px-2 py-[2px] text-gray-300">2 de 5</span>
            </div>
          </header>

          {todos && todos.length <= 0
            ? (
              <div className="flex items-center justify-center px-16 py-6 flex-col border-t border-t-gray-700">
                <NotepadText className="size-14 text-gray-700" />
                <div className="flex items-center flex-col">
                  <p className="font-bold text-gray-500">Você ainda não tem tarefas cadastradas</p>
                  <span className="font-bold text-gray-600">Crie tarefas e organize seus itens a fazer</span>
                </div>
              </div>
              )
            : (
              <ul className="space-y-3">
                {todos?.map((todo) => {
                  return (
                    <li key={todo.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-800 gap-3">
                      <input
                        type="checkbox" id={todo.id} className="peer"
                        defaultChecked={!!todo.finishedDate}
                        onChange={(event) => {
                          updateTodo({
                            id: todo.id,
                            title: todo.title,
                            finishedDate: event.target.checked
                              ? new Date()
                              : null,
                          })
                        }}
                      />
                      <label htmlFor={todo.id} className="mr-auto line-clamp-2 peer-checked:opacity-30">
                        {todo.title}
                      </label>
                      <button className="group hover:bg-gray-700 p-1 rounded-md" onClick={() => deleteTodo({ id: todo.id })}>
                        <Trash className="size-4 text-gray-400 group-hover:text-red-600" />
                      </button>
                    </li>
                  )
                })}
              </ul>
              )}
        </div>
      </main>
    </div>
  )
}
