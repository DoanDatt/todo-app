import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setTodos } from './store/todoSlice'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import TodoStats from './components/TodoStats'
import { Todo } from './types'

function App() {
  const dispatch = useDispatch()

  // Load dữ liệu từ localStorage khi component được mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos) as Todo[]
        dispatch(setTodos({ todos: parsedTodos }))
      } catch (error) {
        console.error('Error loading todos from localStorage:', error)
      }
    }
  }, [dispatch])

  return (
    <div className='min-h-screen bg-gray-100 py-8'>
      <div className='max-w-lg mx-auto p-4'>
        <h1 className='mb-6 text-2xl font-bold text-center text-gray-800'>Ứng dụng Quản lý Công việc</h1>
        <AddTodo />
        <TodoList />
        <TodoStats />
      </div>
    </div>
  )
}

export default App
