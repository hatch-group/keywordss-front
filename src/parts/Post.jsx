import React from "react";
import Store from "../Store";

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  showKeywords(keywords) {
    return (
      keywords.map(keyword => (
        <p> { keyword } </p>
      ))
    );
  };

  render() {
    const { post } = this.props;
    console.log(post);
    return (
      <div className="card">
        <div className="content">
          <div className="card title">
            {post.title}
          </div>
          <div className="description">
            <div>
              使用したキーワード
              <div>
                {this.showKeywords(post.keyword)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
