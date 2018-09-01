import {INCREMENT} from '../constants/index'
import {INCREMENT1} from '../constants/index'
import {DECREMENT} from '../constants/index'

export const increment1 = (num) => {
    return {
        type: INCREMENT1,
        num
    }
}
export const decrement = () => {
    return {
        type: DECREMENT,
    }
}

export const increment = () => {
    return {
        type: INCREMENT,
    }
}