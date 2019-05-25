import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/timelineAction';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

const mapStateToProps = state => ({
  stories: state.timeline.stories,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(actions, dispatch),
});

class Timeline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
  }

  componentWillMount() {
    this.props.updateTimeline(null, null);
  }

  renderTimeline = ({story}) => {
    return (
      <View>
        <Text>
          {story ? story.title : " "}
        </Text>
      </View>
    )
  }

  onRefresh = () => {
    console.log('refreshing');
    this.setStete({isRefreshing: true})
    this.fetchTimeline();
  }

  fetchTimeline = () => {
    this.props.updateTimeline(null, null);
    this.setStete({isRefreshing: false});
  }

  render() {
    console.log(this.props.stories)
    return (
      <View>
        <FlatList
          data={this.props.stories}
          keyExtractor={(story) => story.id.toString()}
          renderItem={this.renderTimeline}
          refreshing={this.state.isRefreshing}
          onRefresh={() => this.onRefresh}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
