import { createStore } from 'solid-js/store'

export interface MenuStoreSettings<O, S = O> {
  /**
   * Available menu options.
   */
  options: O[]

  /**
   * The current menu selection.
   */
  selection?: S
}

export const makeMenuStore = <T>(settings: MenuStoreSettings<T>) => {
  return createStore({
    options: settings.options,
    selection: settings.selection
  })
}

export default makeMenuStore

