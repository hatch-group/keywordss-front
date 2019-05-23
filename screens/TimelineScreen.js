import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Timeline from '../components/Timeline';

export default class TimelineScreen extends React.Component {
  static navigationOptions = {
    title: 'Timeline',
  }

  render() {
    return (
      <View>
        <Timeline/>
      </View>
    );
  }
}
