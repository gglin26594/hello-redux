import {INCREMENT} from '../constants/index'
import {INCREMENT1} from '../constants/index'
import {DECREMENT} from '../constants/index'
import {FETCH_USER_SUCCESS} from '../constants/index'
import {FETCH_USER_REQUEST, FETCH_USER_ERROR} from '../constants/index'
import axios from "axios";

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

export const getUser = () => {
	return dispatch => {
			dispatch(fetchUserRequest());
			axios.get("https://randomuser.me/api")
			.then(res=>{
				dispatch(fetch_user(res.data.results[0]));
			}).catch(err=>{
				dispatch(fetchUserError(err.message));
			})
	}
}

export const fetch_user = (user) => {
	return {
		type: FETCH_USER_SUCCESS,
		user
	}
}

export const fetchUserRequest = () => {
	return {
		type: FETCH_USER_REQUEST,
		
	}
}

export const fetchUserError = (err) => {
	return {
		type: FETCH_USER_ERROR,
		error: err
	}
}






