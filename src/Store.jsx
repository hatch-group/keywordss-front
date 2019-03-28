import { createConnectedStoreAs } from 'undux'

const initialHeader = {
  text: "KeywordSS"
};

const initialTimeline = {
  posts: [
    {
      id: 1,
      title: "Encounter",
      body: "地球という惑星にまだ隕石の嵐が降り続けていたとき、彼らは生命の発生工程の試験を繰り返していた。",
      created: "YYYY-MM-DD",
      updated: "YYYY-MM-DD",
      keyword: ["遺伝子", "もがく", "きらびやかな"],
      status: 1,
      user_id: 1
    },
    {
      id: 2,
      title: "Encounter",
      body: "地球という惑星にまだ隕石の嵐が降り続けていたとき、彼らは生命の発生工程の試験を繰り返していた。",
      created: "YYYY-MM-DD",
      updated: "YYYY-MM-DD",
      keyword: ["遺伝子", "もがく", "きらびやかな"],
      status: 1,
      user_id: 1
    },
    {
      id: 1,
      title: "Encounter",
      body: "地球という惑星にまだ隕石の嵐が降り続けていたとき、彼らは生命の発生工程の試験を繰り返していた。",
      created: "YYYY-MM-DD",
      updated: "YYYY-MM-DD",
      keyword: ["遺伝子", "もがく", "きらびやかな"],
      status: 1,
      user_id: 1
    }
  ]
};

const store = createConnectedStoreAs({
    //initial states
    header: initialHeader,
    timeline: initialTimeline,
});

export default store;
