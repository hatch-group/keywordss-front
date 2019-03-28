import React from "react";
import Store from "../Store";

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props;
    console.log(post);
    return (
      <div className="item">
        <div className="content">
          <div className="postTitle">
            {post.title}
          </div>
          <div className="description">
            {post.keyword}
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
