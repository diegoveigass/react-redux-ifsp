import { PlusCircle } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { addTodo, Todo } from '../lib/redux/slices/todo-slice'
import { useAppDispatch } from '../lib/redux/hooks/useRedux'

export function TodoForm() {
  const [title, setTitle] = useState('')
  const dispatch = useAppDispatch()

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const todo: Todo = {
      id: new Date().getTime().toString(),
      title,
      finishedAt: null,
    }

    dispatch(addTodo(todo))

    setTitle('')
  }

  return (
    <form className="flex -mt-4 gap-2" onSubmit={handleCreateNewTask}>
      <input
        type="text"
        className="outline-none flex-1 rounded-lg bg-gray-800 p-4 placeholder:text-gray-600 ring-sky-400 ring-offset-2 ring-offset-sky-950 focus-within:ring-1"
        placeholder="Adicione uma nova tarefa"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <button
        type="submit"
        className="flex items-center justify-center bg-sky-600 gap-2 rounded-lg font-bold p-4 hover:bg-sky-700 transition-all"
      >
        Criar
        <PlusCircle className="size-4" />
      </button>
    </form>
  )
}
