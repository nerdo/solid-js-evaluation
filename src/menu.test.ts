import { describe, expect, it } from 'vitest'
import makeMenuStore from './makeMenuStore'
import type { MenuState } from './makeMenuStore'

describe('menu', () => {
  describe('initialization', () => {
    it('should initialize with menu options', () => {
      const options = [
        'A',
        'B',
        'C'
      ]

      const [menu, _menuApi] = makeMenuStore({ options })

      expect(menu.options.length).toBe(3)
      expect(menu.options[0]).toBe('A')
      expect(menu.options[1]).toBe('B')
      expect(menu.options[2]).toBe('C')
    })

    it('can be initialized with a selection', () => {
      const options = [
        'A',
        'B',
        'C'
      ]

      const [menu, _menuApi] = makeMenuStore({ options, selection: 'C' })

      expect(menu.selection).toBe('C')
    })

    it('can be initialized with a selection that is not an option', () => {
      const options = [
        'A',
        'B',
        'C'
      ]

      const [menu, _menuApi] = makeMenuStore({ options, selection: 'D' })

      expect(menu.selection).toBe('D')
    })

    it('can be initialized with a selection array', () => {
      const options = [
        'A',
        'B',
        'C'
      ]
      const selection = ['A', 'B']

      const [menu, _menuApi] = makeMenuStore({ options, selection })

      expect(menu.selection).toBe(selection)
    })
  })

  describe('working with objects', () => {
    it('should accept object options and object selections', () => {
      const a = {
        id: 1,
        label: 'A'
      }
      const b = {
        id: 2,
        label: 'B'
      }
      const c = {
        id: 3,
        label: 'C'
      }
      const options = [a, b, c]

      const [menu, _menuApi] = makeMenuStore({ options, selection: b })

      expect(menu.options).toBe(options)
      expect(menu.selection).toBe(b)
    })

    it('should accept object options and mapped selection for single selection', () => {
      const a = {
        id: 1,
        label: 'A'
      }
      const b = {
        id: 2,
        label: 'B'
      }
      const c = {
        id: 3,
        label: 'C'
      }
      const options = [a, b, c]
      const optionSelectionHandler = (menu: MenuState<typeof a, typeof a.id>) => {
        return menu.options.filter((o) => o.id === menu.selection)[0]
      }

      const [menu, _menuApi] = makeMenuStore({ options, selection: b.id }, { optionSelectionHandler })

      expect(menu.options).toBe(options)
      expect(menu.selection).toBe(b.id)
      expect(menu.optionSelection).toBe(b)
    })

    it('should accept object options and mapped selections for multiple selections', () => {
      const a = {
        id: 1,
        label: 'A'
      }
      const b = {
        id: 2,
        label: 'B'
      }
      const c = {
        id: 3,
        label: 'C'
      }
      const options = [a, b, c]
      const optionSelectionHandler = (menu: MenuState<typeof a, number[]>) => {
        return menu.options.filter((o) => menu.selection?.includes(o.id))
      }

      const [menu, _menuApi] = makeMenuStore({ options, selection: [a.id, c.id] }, { optionSelectionHandler })

      expect(menu.options).toBe(options)
      expect(menu.selection).toEqual([a.id, c.id])
      expect(menu.optionSelection).toEqual([a, c])
    })
  })

  describe('api', () => {
    describe('setSelection()', () => {
      it('should set the selection', () => {
        const options = [
          'A',
          'B',
          'C'
        ]
        const [menu, menuApi] = makeMenuStore({ options })

        expect(menu.selection).toBeUndefined()
        menuApi.setSelection('B')

        expect(menu.selection).toBe('B')

        menuApi.setSelection('D')
        expect(menu.selection).toBe('D')

        menuApi.setSelection(void 0)
        expect(menu.selection).toBeUndefined()
      })
    })
  })
})
