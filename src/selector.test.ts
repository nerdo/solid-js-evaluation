import { describe, it, expect } from 'vitest'
import makeSelectorStore from './makeSelectorStore'

describe('selector', () => {
  it('should have a reasonable default state', () => {
    const [selector, _setSelector] = makeSelectorStore()

    expect(selector.isActive).toBe(false)
    expect(selector.value).toBeUndefined()
  })

  it('can be initialized with custom partial state', () => {
    const [a, _setA] = makeSelectorStore({isActive: true})
    expect(a.isActive).toBe(true)
    expect(a.value).toBeUndefined()

    const [b, _setB] = makeSelectorStore({value: 'how now brown cow'})
    expect(b.isActive).toBe(false)
    expect(b.value).toBe('how now brown cow')
  })
})
