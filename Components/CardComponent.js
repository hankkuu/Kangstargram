import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import {
  Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon
} from 'native-base';

class CardComponent extends Component {
  render() {
    const images = {
      1: require('../assets/react_native.jpg'),
      2: require('../assets/python.jpg'),
      3: require('../assets/deep_learning.png')
    }

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/beomwoo.jpeg')} />
            <Body>
              <Text>Beomwoo</Text>
              <Text note>2018년 7월 16일</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          {/* <Image source={require('../assets/react_native.jpg')} style={{ height: 200, width: null, flex: 1 }} /> */}
          <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon name='ios-heart-outline' style={{ color: 'black' }} />
            </Button>
            <Button transparent>
              <Icon name='ios-chatbubbles-outline' style={{ color: 'black' }} />
            </Button>
            <Button transparent>
              <Icon name='ios-send' style={{ color: 'black' }} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 40 }}>
          {/* <Text>좋아요</Text> */}
          <Text>좋아요 {this.props.likes}개</Text>
        </CardItem>
        <CardItem>
          <Text>
            <Text style={{ fontWeight: '900' }}>강스타그램</Text>
            #리액트 네이티브로 만드는 강스타그램
          </Text>
        </CardItem>
      </Card>
    );
  }
}
export default CardComponent;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
