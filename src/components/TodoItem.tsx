import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Trash2, Edit2, Check, X } from 'lucide-react'
import { toggleTodo, deleteTodo, editTodo } from '../store/todoSlice'
import { Todo } from '../types'

interface TodoItemProps {
  todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo.id }))
  }

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }))
  }

  const handleEdit = () => {
    setIsEditing(true)
    setEditText(todo.text)
  }

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, text: editText.trim() }))
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditText(todo.text)
  }

  return (
    <div className={`flex items-center p-3 border-b border-gray-200 group ${todo.completed ? 'bg-gray-50' : ''}`}>
      <input type='checkbox' checked={todo.completed} onChange={handleToggle} className='w-5 h-5 mr-3 cursor-pointer' />

      {isEditing ? (
        <div className='flex flex-grow gap-2'>
          <input
            type='text'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className='flex-grow p-1 border border-gray-300 rounded'
            autoFocus
          />
          <button
            onClick={handleSave}
            disabled={!editText.trim()}
            className='p-1 text-white bg-green-500 rounded hover:bg-green-600 disabled:bg-gray-300'
          >
            <Check size={18} />
          </button>
          <button onClick={handleCancel} className='p-1 text-white bg-gray-500 rounded hover:bg-gray-600'>
            <X size={18} />
          </button>
        </div>
      ) : (
        <>
          <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.text}</span>
          <div className='flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
            <button onClick={handleEdit} className='p-1 text-white bg-blue-500 rounded hover:bg-blue-600'>
              <Edit2 size={18} />
            </button>
            <button onClick={handleDelete} className='p-1 text-white bg-red-500 rounded hover:bg-red-600'>
              <Trash2 size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default TodoItem
