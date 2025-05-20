import { useSelector } from 'react-redux'
import { RootState } from '../store'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos)

  return (
    <div className='mt-4 border rounded-md overflow-hidden'>
      {todos.length === 0 ? (
        <div className='p-4 text-center text-gray-500'>Chưa có công việc nào. Hãy thêm công việc mới!</div>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  )
}

export default TodoList
