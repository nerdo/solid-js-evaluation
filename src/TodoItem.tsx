import { Component } from 'solid-js'
import styles from './TodoItem.module.css'

export interface TodoItemProps {
  /**
    * Whether or not the todo item is completed.
    * @default false
    */
  completed?: boolean

  setCompleted?: (isCompleted: boolean) => any

  /**
    * The todo item's label.
    * @default ''
    */
  label?: string

  setLabel?: (newLabel?: string) => any

  onRemove?: () => any
}

// export const TodoItem: Component = (p: TodoItemProps) => {
export const TodoItem: Component<TodoItemProps> = (p) => {
  return (
    <div class={styles.TodoItem}>
      <div class={styles.toggle}>
        <input type='checkbox' class='checkbox' checked={p.completed} onClick={() => p.setCompleted?.(!p.completed)} />
      </div>
      {/* <div class={styles.label}><input type='text' value={p.label} onKeyUp={(e) => console.log(e.currentTarget.value)} /></div> */}
      <div class={styles.label}>
        <input type='text' class='input input-sm focus:input-bordered focus:input-primary' value={p.label} onKeyUp={(e) => p.setLabel?.(e.currentTarget.value)} />
      </div>
      <div class={styles.actions}>
        {p.onRemove &&
          <button class='btn btn-circle btn-sm' onClick={() => p.onRemove?.()}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        }
      </div>
    </div>
  )
}

export default TodoItem
