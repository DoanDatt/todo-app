import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo, TodoState } from '../types'

// Tạo slice trong Redux Toolkit
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  } as TodoState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string }>) => {
      state.todos.push({
        id: Date.now().toString(),
        text: action.payload.text,
        completed: false
      })
    },
    toggleTodo: (state, action: PayloadAction<{ id: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.text = action.payload.text
      }
    },
    setTodos: (state, action: PayloadAction<{ todos: Todo[] }>) => {
      state.todos = action.payload.todos
    }
  }
})

// Xuất các actions từ slice
export const { addTodo, toggleTodo, deleteTodo, editTodo, setTodos } = todoSlice.actions

export default todoSlice.reducer
