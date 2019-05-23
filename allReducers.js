import { combineReducers } from 'redux';
import sampleReducer from './reducers/sampleReducer';
import timelineReducer from './reducers/timelineReducer';

const allReducers = combineReducers({
	sample:sampleReducer,
  timeline: timelineReducer,
});

export default allReducers;
