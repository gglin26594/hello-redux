import {INCREMENT} from '../constants/index'
import {DECREMENT} from '../constants/index'

export const increment = () => {
    return {
        type: INCREMENT,
    }
}
export const decrement = () => {
    return {
        type: DECREMENT,
    }
}