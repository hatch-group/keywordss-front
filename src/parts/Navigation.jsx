import React from "react";
import Store from "../Store";
// import * as actions from "../actions/Navigation";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Icon from "react-fontawesome";

class Navigation extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Grid centered className="footer">
        <Grid.Column className="navIcon">
          <Link to="/">
            <Icon name="home" size="3x" />
          </Link>
        </Grid.Column>
        <Grid.Column className="navIcon">
          <Link to="/">
            <Icon name="user" size="3x" />
          </Link>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Store.withStores(Navigation);
