import { createConnectedStoreAs } from 'undux'

const initialHeader = {
  text: "KeywordSS"
};


const initialTimeline = {
  posts: []
};

const store = createConnectedStoreAs({
    //initial states
    header: initialHeader,
    timeline: initialTimeline,
});

export default store;
