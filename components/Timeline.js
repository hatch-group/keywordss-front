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

  componentDidMount() {
    this.fetchTimeline();
  }

  renderTimeline = ({story}) => (
      <Text>
        {story ? story.title : 'null'}
      </Text>
  )

  onRefresh() {
    console.log('refreshing');
    this.setState({isRefreshing: true});
    this.fetchTimeline();
  }

  fetchTimeline() {
    this.props.updateTimeline(null, null);
    console.log(this.props.stories);
    this.setState({isRefreshing: false});
  }

  render() {
    return (
      <View>
        <FlatList
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isRefreshing}
          data={this.props.stories}
          keyExtractor={(story) => story.id.toString()}
          renderItem={this.renderTimeline}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
