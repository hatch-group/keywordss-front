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

  componentDidMount() {
    this.props.updateTimeline(null, null);
  }

  render() {
    console.log(this.props.stories)
    return (
      <View>
        <FlatList
          data={this.props.stories}
          keyExtractor={(story) => story.id.toString()}
          renderItem={({story}) => (
            <View>
              <Text> {story ? story.title : ""} </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
