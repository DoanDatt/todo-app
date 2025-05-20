import { useSelector } from 'react-redux'
import { RootState } from '../store'

const TodoStats = () => {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const totalTodos = todos.length
  const completedTodos = todos.filter((todo) => todo.completed).length

  return (
    <div className='mt-4 p-3 bg-gray-100 rounded-md text-sm text-gray-700'>
      <p>Tổng số: {totalTodos} công việc</p>
      <p>
        Đã hoàn thành: {completedTodos} công việc (
        {totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0}%)
      </p>
    </div>
  )
}

export default TodoStats
