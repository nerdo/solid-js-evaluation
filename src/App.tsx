import { For } from 'solid-js'
import { createStore } from 'solid-js/store'
import type { Component } from 'solid-js'
import TodoItem from './TodoItem'
import { debug } from './debug'

import styles from './App.module.css'

export interface TodoItemState {
  completed?: boolean
  label?: string
}

const suffixFor = (n: number) => {
  const str = `${n}`
  const lastDigit = str.charAt(str.length - 1)
  if (!lastDigit.length) return ''
  if (n > 9 && n < 20) return 'th'
  if (lastDigit === '1') return 'st'
  if (lastDigit === '2') return 'nd'
  if (lastDigit === '3') return 'rd'
  return 'th'
}

const App: Component = () => {
  const [todos, setTodos] = createStore<TodoItemState[]>([
    { completed: false, label: 'Hello, Solid' },
    { completed: false, label: 'Cool beans' },
    { completed: true, label: 'Rudolph' },
  ])

  debug('todos', todos)

  return (
    <div class={styles.App}>
      <h1 class="text-3xl font-bold underline">Hello, Tailwind!</h1>
      <button
        onClick={() => setTodos(todos.length, { completed: false, label: `${todos.length + 1}${suffixFor(todos.length + 1)} New Todo` })}
      >
        Add Todo
      </button>
      <For each={todos}>{(todo, index) => (
        <TodoItem
          completed={todo.completed}
          label={todo.label}
          setCompleted={(isCompleted: boolean) => setTodos(index(), 'completed', isCompleted)}
          setLabel={(newLabel?: string) => setTodos(index(), 'label', newLabel)}
          onRemove={() => setTodos(todos.filter((t) => t !== todo))}
        />)}
      </For>
    </div>
  );
};

export default App;
