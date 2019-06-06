import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as timelineActions from './actions/timelineAction';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

function mapStateToProps(state) {
  return {
    stories: state.timeline.stories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(timelineActions, dispatch),
  }
}

class Timeline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
  }

  componentWillMount() {
    this.fetchTimeline();
  }

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
        {
          this.props.stories.map((story, index) => (
            <TouchableOpacity
              key={index}
            >
              <Text> {story['title']} </Text>
            </TouchableOpacity>
          ))
        }
      </View> 
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
