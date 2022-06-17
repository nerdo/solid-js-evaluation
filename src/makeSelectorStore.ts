import { createStore } from 'solid-js/store'

export interface SelectorState<V> {
  isActive: boolean
  value: V | undefined
}

export const defaultInitialState = {
  isActive: false,
  value: void 0
}

export const makeSelectorStore = <V>(initialState: Partial<SelectorState<V>> = defaultInitialState) => {
  return createStore({
    ...defaultInitialState,
    ...initialState
  })
}

export default makeSelectorStore
