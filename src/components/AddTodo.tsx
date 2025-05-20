import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Plus } from 'lucide-react'
import { addTodo } from '../store/todoSlice'

const AddTodo = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch(addTodo({ text: text.trim() }))
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-2 mb-4'>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Nhập công việc mới...'
        className='flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <button
        type='submit'
        disabled={!text.trim()}
        className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-1'
      >
        <Plus size={18} /> Thêm
      </button>
    </form>
  )
}

export default AddTodo
