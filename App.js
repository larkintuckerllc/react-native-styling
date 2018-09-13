import Expo from 'expo';
import {
  Button,
  Container,
  Content,
  Header,
  StyleProvider,
  Text,
} from 'native-base';
import React from 'react';
import getTheme from './native-base-theme/components/';
import theme from './native-base-theme/variables/variables';

export default class App extends React.Component {
  componentDidMount() {
    Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <Header />
          <Content>
            <Button onPress={this.handlePress}>
              <Text>Click Me!</Text>
            </Button>
          </Content>
        </Container>
      </StyleProvider>
    );
  }

  handlePress = () => {
  }
}
