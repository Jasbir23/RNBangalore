import React, { Component } from "react";
import { Alert } from "react-native";
import Exponent from "expo";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Form,
  Item,
  Label,
  Input,
  Text
} from "native-base";
export default class LoginScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginResponse: undefined
    };
  }
  async logIn() {
    const {
      type,
      token
    } = await Exponent.Facebook.logInWithReadPermissionsAsync(
      "742168645991093",
      {
        permissions: ["public_profile"]
      }
    );
    if (type === "success") {
      const response = await fetch(
        `https://graph.facebook.com/me?fields=name,id,age_range,link,gender,picture,cover&access_token=${token}`
      );
      const obj = await response.json();
      this.setState({
        loginResponse: obj
      });
      console.log(obj, "LOGIN KE BAAD");
    }
  }
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Login/SignUp</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={text => this.setState({ username: text })} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={text => this.setState({ password: text })} />
            </Item>
          </Form>
          <Button
            full
            dark
            onPress={() => this.props.navigation.navigate("MainTab")}
            style={{ marginVertical: 10 }}
          >
            <Text>LogIn</Text>
          </Button>
          <Button
            full
            primary
            style={{ marginVertical: 10 }}
            onPress={() => this.logIn()}
          >
            <Text>Facebook</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
