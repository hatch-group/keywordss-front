import { combineReducers } from 'redux';
import sampleReducer from './reducers/sampleReducer';

const allReducers = combineReducers({
	sample:sampleReducer,
});

export default allReducers;
