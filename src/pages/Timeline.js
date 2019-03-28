import React from "react";
import Store from "../Store";
import Post from "../parts/Post";
// import * as actions from "../actions/timeline";

class Timeline extends React.Component {

  constructor(props){
    super(props);
    const posts = this.dummyPosts();
    this.state = {
      posts: posts
    };
  };
  
  componentDidMount(){
    const { header, timeline } = this.props;
    header.set("text")("Timeline");
    timeline.on("posts").subscribe((posts) => {
      this.setState({ posts: posts });
    });
    console.log(this.state.posts);
  }

  // TODO: APIが実装できたら消す
  dummyPosts() {
    let posts = [];
    for(let i = 0; i < 20; i++) {
      posts.push(
        {
          id: 1,
          title: "タイトル",
          body: "地球という惑星にまだ隕石の嵐が降り続けていたとき、彼らは生命の発生工程の試験を繰り返していた。",
          created: "yyyy-mm-dd",
          updated: "yyyy-mm-dd",
          keyword: ["遺伝子", "もがく", "きらびやかな"],
          status: 1,
          user_id: 1
        }
      );
    }
    return posts;
  };

  posts() {
    return (
      this.state.posts.map(post => (
        <Post post={post}/>
      ))
    );
  };

  render(){
    return (
      <div className="posts">
        <div className="ui cards">
          { this.posts() }
        </div>
      </div>
    );
  }
}

export default Store.withStores(Timeline);
