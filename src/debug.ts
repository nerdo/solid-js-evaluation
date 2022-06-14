import { createEffect } from 'solid-js'

export const debug = (label: string, value: any) => createEffect(() => console.debug(label, JSON.stringify(value)))
