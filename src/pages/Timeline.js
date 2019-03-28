import React from "react";
import Store from "../Store";
import Post from "../parts/Post";
// import * as actions from "../actions/timeline";

class Timeline extends React.Component {

  constructor(props){
    super(props);
    this.state = {
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
  };
  
  componentDidMount(){
    const { header, timeline } = this.props;
    header.set("text")("Timeline");
    timeline.on("posts").subscribe((posts) => {
      console.log(posts);
      this.setState({ posts: posts });
    });
  }

  posts() {
    console.log(this.state.posts);
    return (
      this.state.posts.map(post => (
        <Post post={post}/>
      ))
    );
  };

  render(){
    return (
      <div className="posts">
        <div className="ui middle aligned selection list">
          { this.posts() }
        </div>
      </div>
    );
  }
}

export default Store.withStores(Timeline);
