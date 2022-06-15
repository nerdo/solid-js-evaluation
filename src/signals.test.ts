import { describe, expect, it } from 'vitest'
import { createSignal } from 'solid-js'

describe('testing signals', () => {
  it('should work', () => {
    const [count, setCount] = createSignal(0)
    expect(count()).toBe(0)

    setCount(2)
    expect(count()).toBe(2)
  })
})
