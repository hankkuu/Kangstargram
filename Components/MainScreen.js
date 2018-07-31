import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

// Native-base icon 추가
import { Icon } from 'native-base';
import { createMaterialTopTabNavigator } from 'react-navigation';

// 파일에서 추가
import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

class MainScreen extends Component {
  // // static navigationOptions = {
  // //   headerLeft: <Icon name='camera' style={{ paddingLeft: 10 }} />,
  // //   title: 'kangstargram',
  // //   headerRight: <Icon name='send' style={{ paddingRight: 10 }} />,
  // // }
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      // 이런식으로 화면을 연결 시킨다.
      <AppTabNavigator />
    );
  }
}

export default MainScreen;
// 탭을 추가함
const AppTabNavigator = createMaterialTopTabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  Search: {
    screen: SearchTab
  },
  AddMedia: {
    screen: AddMediaTab
  },
  Likes: {
    screen: LikesTab
  },
  Profle: {
    screen: ProfileTab
  }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      ...Platform.select({
        android: {
          backgroundColor: 'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true,
  }
})

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
