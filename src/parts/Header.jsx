
import React from "react";
import Store from "../Store";
// import * as actions from "../actions/Header";
import { Link } from "react-router-dom";
import Icon from "react-fontawesome";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: "KeywordSS"
    }
  }

  componentDidMount(){
    const { header } = this.props;
    header.on("text").subscribe((text) => {
      this.setState({ text: text });
    });
  }

  render(){
    return (
      <div className="header">
        <h2 className="headerContent">
          {this.state.text}
        </h2>
      </div>
    );
  }
}

export default Store.withStores(Header);
