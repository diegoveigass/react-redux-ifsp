import { useAppSelector } from '../lib/redux/hooks/useRedux'

export function TodoHeader() {
  const todos = useAppSelector((state) => state.todos.todos)

  const todoCount = todos.length
  const todoFinishedCount = todos
    .filter((todo) => todo.finishedAt !== null).length

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <span className="font-bold text-sky-500">Tarefas criadas</span>{' '}
        <span className="text-sm font-bold bg-gray-700 rounded-full px-2 py-[2px] text-gray-300">
          {todoCount}
        </span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="font-bold text-purple-500">Concluídas</span>{' '}
        <span className="text-sm font-bold bg-gray-700 rounded-full px-2 py-[2px] text-gray-300">
          {todoFinishedCount} de {todoCount}
        </span>
      </div>
    </header>
  )
}
