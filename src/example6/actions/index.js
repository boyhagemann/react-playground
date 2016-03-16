import { TOGGLE } from '../constants'

export function toggle(model) {
    return { type: TOGGLE, model }
}