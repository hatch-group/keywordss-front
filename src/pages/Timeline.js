import React from "react";
import Store from "../Store";
// import * as actions from "../actions/timeline";

class Timeline extends React.Component {

  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    const { header } = this.props;
    header.set("text")("Timeline");
  }

  render(){
    return (
      <div>
      </div>
    );
  }
}

export default Store.withStores(Timeline);
