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
      <div class={styles.toggle}><input type='checkbox' checked={p.completed} onClick={() => p.setCompleted?.(!p.completed)} /></div>
      {/* <div class={styles.label}><input type='text' value={p.label} onKeyUp={(e) => console.log(e.currentTarget.value)} /></div> */}
      <div class={styles.label}><input type='text' value={p.label} onKeyUp={(e) => p.setLabel?.(e.currentTarget.value)} /></div>
      <div class={styles.actions}>
        {p.onRemove && <button onClick={() => p.onRemove?.()}>&times;</button>}
      </div>
    </div>
  )
}

export default TodoItem
