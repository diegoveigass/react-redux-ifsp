import { Trash } from 'lucide-react'
import { useAppDispatch } from '../lib/redux/hooks/useRedux'
import { deleteTodo, toggleTodo } from '../lib/redux/slices/todo-slice'

interface TodoItemProps {
  id: string
  title: string
}

export function TodoItem({ id, title }: TodoItemProps) {
  const dispatch = useAppDispatch()

  function handleToggleTodo(todoId: string, isChecked: boolean) {
    dispatch(toggleTodo({
      todoId,
      finishedAt: isChecked
        ? new Date()
        : null,
    }))
  }

  function handleDeleteTodo(todoId: string) {
    dispatch(deleteTodo({ todoId }))
  }

  return (
    <li className="flex items-center justify-between p-4 rounded-lg bg-gray-800 gap-3">
      <input
        type="checkbox"
        id={id}
        className="peer"
        onChange={(event) => handleToggleTodo(id, event.target.checked)}
      />
      <label htmlFor={id} className="w-full mr-auto truncate peer-checked:opacity-30">
        {title}
      </label>
      <button
        className="group hover:bg-gray-700 p-1 rounded-md"
        onClick={() => handleDeleteTodo(id)}
      >
        <Trash className="size-4 text-gray-400 group-hover:text-red-600" />
      </button>
    </li>
  )
}
