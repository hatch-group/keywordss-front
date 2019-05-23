import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/timelineAction';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

const mapStateToProps = (state) => ({
  stories: state.timeline.stories,
});

const mapDispatchToProps = (dispatch) => ({
    onMount() {
        dispatch(actions.updateTimeline(null, null));
    }
});

class Timeline extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const stories = this.props.stories;
    console.log(stories)
    return (
      <View>
        <FlatList
          data={stories}
          keyExtractor={(story) => story.id.toString()}
          renderItem={({story}) => (
            <View>
              <Text> {story} </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
