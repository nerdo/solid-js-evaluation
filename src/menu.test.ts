import { describe, expect, it } from 'vitest'
import makeMenuStore from './makeMenuStore'

describe('menu', () => {
  describe('initialization', () => {
    it('should initialize with menu options', () => {
      const options = [
        'A',
        'B',
        'C'
      ]

      const [menu, _setMenu] = makeMenuStore({ options })

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

      const [menu, _setMenu] = makeMenuStore({ options, selection: 'C' })

      expect(menu.selection).toBe('C')
    })

    it('can be initialized with a selection that is not an option', () => {
      const options = [
        'A',
        'B',
        'C'
      ]

      const [menu, _setMenu] = makeMenuStore({ options, selection: 'D' })

      expect(menu.selection).toBe('D')
    })

    it('can be initialized with a selection array', () => {
      const options = [
        'A',
        'B',
        'C'
      ]
      const selection = ['A', 'B']

      const [menu, _setMenu] = makeMenuStore({ options, selection })

      expect(menu.selection).toBe(selection)
    })
  })
})
