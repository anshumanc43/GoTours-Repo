import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
	//dispatch after getting current user
	return function(dispatch){
		axios
			.get('/api/current_user')
			.then(res => dispatch({ type: FETCH_USER, payload: res }));
	}


};