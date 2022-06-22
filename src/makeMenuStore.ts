import { createStore } from 'solid-js/store'

const noop = () => { }

export interface MenuState<O, S = O> {
  /**
   * Available menu options.
   */
  options: O[]

  /**
   * The current menu selection.
   */
  selection?: S
}

export interface MenuStoreSettings<O, S = O> {
  /**
   * Should map the selection to an option or options.
   * 
   * This gets called when the optionSelection property is read from MenuState.
   *
   * It is meant as a way to look up the option(s) when the options 
   * are objects and the selection represents uniuque identifier(s) for an options.
   */
  optionSelectionHandler?: ((menu: MenuState<O, S>) => O) | ((menu: MenuState<O, S>) => O[])
}

export const makeMenuStore = <O, S = O>(initialState: MenuState<O, S>, settings?: MenuStoreSettings<O, S>) => {
  const [menu, setState] = createStore({
    options: initialState.options,
    selection: initialState.selection,
    get optionSelection() {
      const mapper = settings?.optionSelectionHandler || noop
      return mapper(menu)
    }
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
