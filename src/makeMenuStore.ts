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

export const makeMenuStore = <O, S = O>(settings: MenuStoreSettings<O, S>) => {
  const [menu, setState] = createStore({
    options: settings.options,
    selection: settings.selection
  })

  const menuApi = {
    setMenu: setState,
    setSelection(selection?: S) {
      setState('selection', selection)
    }
  }

  return [menu, menuApi] as [typeof menu, typeof menuApi]
}

export default makeMenuStore
