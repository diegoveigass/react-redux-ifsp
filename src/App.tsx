import { useAppSelector } from './lib/redux/hooks/useRedux'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoHeader } from './components/TodoHeader'
import { EmptyContainer } from './components/EmptyContainer'
import { TodoItem } from './components/TodoItem'

export function App() {
  const todos = useAppSelector((state) => state.todos.todos)

  return (
    <div className="h-screen">
      <Header />

      <main className="max-w-3xl m-auto space-y-16">
        <TodoForm />

        <div className="space-y-6">
          <TodoHeader />

          {todos.length === 0
            ? (
              <EmptyContainer />
              )
            : (
              <ul className="space-y-3">
                {todos.map((todo) => {
                  return (
                    <TodoItem
                      key={todo.id}
                      id={todo.id}
                      title={todo.title}
                    />
                  )
                })}
              </ul>
              )}
        </div>
      </main>
    </div>
  )
}
