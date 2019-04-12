import React from "react";
import Store from "../Store";

class SignUp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      id: "",
      pass: "",
      confirm: ""
    };
  }
  
  componentWillMount(){
    const { header } = this.props;
    header.set("text")("Sign up");
  }

  render(){
    return (
      <div className="wrapper fixHeight">
        <div className="center">
          <div className="ui input">
            <input type="text" placeholder="User ID" />
          </div>
          <div className="ui input">
            <input type="password" placeholder="Password" />
          </div>
          <div className="ui input">
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button className="ui button">Sign up</button>
        </div>
      </div>
    );
  }
}

export default Store.withStores(SignUp);
