import { NotepadText } from 'lucide-react'

export function EmptyContainer() {
  return (
    <div className="flex items-center justify-center px-16 py-6 flex-col border-t border-t-gray-700">
      <NotepadText className="size-14 text-gray-700" />
      <div className="flex items-center flex-col">
        <p className="font-bold text-gray-500">Você ainda não tem tarefas cadastradas</p>
        <span className="font-bold text-gray-600">Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}
