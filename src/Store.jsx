import { createConnectedStoreAs } from 'undux'

const initialHeader = {
  text: "KeywordSS"
}

const store = createConnectedStoreAs({
    //initial states
    header: initialHeader
});

export default store;
