import { combineReducers } from 'redux';
import sampleReducer from './reducers/sampleReducer';
import timelineReducer from './reducers/timelineReducer';

const allReducers = combineReducers({
  timeline: timelineReducer,
});

export default allReducers;
