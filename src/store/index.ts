import { configureStore, Middleware } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

// Lưu trữ trong localStorage
const saveToLocalStorage = (todos: any) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Middleware để tự động lưu state vào localStorage
const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action)
  const state = store.getState()
  saveToLocalStorage(state.todos.todos)
  return result
}

// Store setup với middleware
export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
