import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button
} from 'react-native';
import { Icon } from 'native-base';

const onClick = () => {
  Alert.alert('Button has been pressed!');
};

class LikesTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-heart' style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <View style={style.container}>
        <Text>LikesTab</Text>
        <Button onPress={onClick} title='Button'></Button>
      </View>
    );
  }
}
export default LikesTab;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
