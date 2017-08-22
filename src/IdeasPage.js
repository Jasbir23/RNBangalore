import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import {
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  Item,
  Label,
  Button,
  Text,
  Card,
  CardItem,
  Thumbnail
} from "native-base";
export default class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [
        {
          name: "What pre-processor is best for React Native Development?",
          user: {
            name: "Rahul Yadav",
            followers: 12
          }
        },
        {
          name: "What kind of Navigation is suited in my case?",
          user: {
            name: "Smriti Irani",
            followers: 123
          }
        },
        {
          name: "Bug with React-Navigation Drawer? Anybody has a similar problem?",
          user: {
            name: "Sarara Jain",
            followers: 6
          }
        },
        {
          name: "Animation in React-Native, the best approach?",
          user: {
            name: "Jasbir Singh",
            followers: 4
          }
        },
        {
          name: "Name any 3 best UI and state management libraries?",
          user: {
            name: "Ankur Kedia",
            followers: 8
          }
        }
      ]
    };
  }
  render() {
    const renderedCards = this.state.questions.map((ques, i) => {
      return (
        <Card key={i}>
          <CardItem>
            <Body>
              <Text>{ques.name}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri: "https://lh3.googleusercontent.com/B4Rmc8NPG7fHIGmN65214ppzNGHNa_wuLSSJ6Dz85KJoZ0zlBFnpH16pOJBHpwA0fCs=w300"
                }}
              />
            </Left>
            <Body style={{ flex: 1.2, paddingTop: 8 }}>
              <Text>{ques.user.name}</Text>
              <Text note>Followers {ques.user.followers}</Text>
            </Body>
            <Right style={{ flex: 1.2 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>Upvote</Text>
              </Button>
            </Left>
            <Body style={{ flex: 0.6 }}>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>Answer</Text>
              </Button>
            </Body>
            <Right>
              <Text>13 hrs ago</Text>
            </Right>
          </CardItem>
        </Card>
      );
    });
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>IDEAS</Title>
          </Body>
          <Right />
        </Header>
        <Content
          padder
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {renderedCards}
        </Content>
      </Container>
    );
  }
}
